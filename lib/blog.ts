import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import python from 'highlight.js/lib/languages/python';
import typescript from 'highlight.js/lib/languages/typescript';
import css from 'highlight.js/lib/languages/css';
import html from 'highlight.js/lib/languages/xml';
import json from 'highlight.js/lib/languages/json';
import bash from 'highlight.js/lib/languages/bash';
import sql from 'highlight.js/lib/languages/sql';
import java from 'highlight.js/lib/languages/java';
import cpp from 'highlight.js/lib/languages/cpp';
// Register languages for highlight.js
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('python', python);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('css', css);
hljs.registerLanguage('html', html);
hljs.registerLanguage('json', json);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('sql', sql);
hljs.registerLanguage('java', java);
hljs.registerLanguage('cpp', cpp);

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  coverImage?: string;
  tags: string[];
  content: string;
  excerpt: string;
  readTime: number;
}

const postsDirectory = path.join(process.cwd(), 'content/blogs');

// Configure marked with syntax highlighting
const renderer = new marked.Renderer();

// Custom heading renderer with anchor links
renderer.heading = ({ tokens, depth }: any) => {
  const text = tokens.map((t: any) => t.text || t.raw).join('');
  const textContent = typeof text === 'string' ? text : String(text);
  const escapedText = textContent.toLowerCase().replace(/[^\w]+/g, '-');
  return `
    <h${depth} id="${escapedText}" class="markdown-heading markdown-h${depth}">
      <a href="#${escapedText}" class="anchor-link">#</a>
      ${textContent}
    </h${depth}>
  `;
};

// Custom code block renderer with syntax highlighting
renderer.code = ({ text, lang }: any) => {
  const language = lang || 'text';
  let highlightedCode = text;

  try {
    if (hljs.getLanguage(language)) {
      highlightedCode = hljs.highlight(text, { language }).value;
    } else {
      highlightedCode = hljs.highlightAuto(text).value;
    }
  } catch (error) {
    console.warn('Syntax highlighting failed:', error);
  }

  return `
    <div class="code-block-container">
      <div class="code-block-header">
        <span class="code-language">${language}</span>
        <button class="copy-code-btn" onclick="copyCode(this)">Copy</button>
      </div>
      <pre class="code-block"><code class="hljs language-${language}">${highlightedCode}</code></pre>
    </div>
  `;
};

// Custom blockquote renderer
renderer.blockquote = ({ tokens }: any) => {
  const quote = tokens.map((t: any) => t.text || t.raw).join('');
  return `<blockquote class="markdown-blockquote">${quote}</blockquote>`;
};

// Custom table renderer
renderer.table = ({ header, rows }: any) => `
  <div class="table-container">
    <table class="markdown-table">
      <thead>${header}</thead>
      <tbody>${rows}</tbody>
    </table>
  </div>
`;

// Custom link renderer for external links
renderer.link = ({ href, title, tokens }: any) => {
  const text = tokens.map((t: any) => t.text || t.raw).join('');
  const isExternal = href.startsWith('http') && !href.includes('localhost');
  const rel = isExternal ? 'rel="noopener noreferrer"' : '';
  const target = isExternal ? 'target="_blank"' : '';
  const titleAttr = title ? `title="${title}"` : '';
  return `<a href="${href}" ${titleAttr} ${rel} ${target} class="markdown-link">${text}</a>`;
};

marked.use({
  renderer,
  gfm: true,
  breaks: true
});

function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

function generateExcerpt(content: string, maxLength: number = 200): string {
  // Remove markdown syntax and get plain text
  const plainText = content
    .replace(/#{1,6}\s+/g, '') // Remove headings
    .replace(/\*\*([^*]+)\*\*/g, '$1') // Remove bold
    .replace(/\*([^*]+)\*/g, '$1') // Remove italic
    .replace(/`([^`]+)`/g, '$1') // Remove inline code
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '') // Remove images
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/^\s*[-*+]\s+/gm, '') // Remove list markers
    .replace(/^\s*\d+\.\s+/gm, '') // Remove numbered list markers
    .replace(/^\s*>\s+/gm, '') // Remove blockquotes
    .trim();

  if (plainText.length <= maxLength) {
    return plainText;
  }

  return plainText.substring(0, maxLength).replace(/\s+\w*$/, '') + '...';
}

export function getAllPosts(): BlogPost[] {
  try {
    if (!fs.existsSync(postsDirectory)) {
      console.warn('Blog posts directory does not exist:', postsDirectory);
      return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const posts = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
          slug,
          title: data.title || 'Untitled',
          date: data.date || new Date().toISOString().split('T')[0],
          author: data.author || 'Unknown Author',
          coverImage: data.coverImage,
          tags: data.tags || [],
          content,
          excerpt: generateExcerpt(content),
          readTime: calculateReadTime(content)
        };
      });

    // Sort by date (newest first)
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Convert markdown to HTML with syntax highlighting
    const htmlContent = marked.parse(content) as string;

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString().split('T')[0],
      author: data.author || 'Unknown Author',
      coverImage: data.coverImage,
      tags: data.tags || [],
      content: htmlContent,
      excerpt: generateExcerpt(content),
      readTime: calculateReadTime(content)
    };
  } catch (error) {
    console.error('Error reading blog post:', error);
    return null;
  }
}

export function getBlogPosts(): BlogPost[] {
  return getAllPosts();
}

export function getBlogPost(slug: string): BlogPost | null {
  return getPostBySlug(slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter(post => post.tags.includes(category));
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  return getAllPosts().filter(post => post.tags.includes(tag));
}

export function getCategories(): string[] {
  const allTags = getAllPosts().flatMap(post => post.tags);
  return Array.from(new Set(allTags));
}

export function getAllTags(): string[] {
  const allTags = getAllPosts().flatMap(post => post.tags);
  return Array.from(new Set(allTags));
}