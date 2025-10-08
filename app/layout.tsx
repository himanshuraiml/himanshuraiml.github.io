import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dr. Himanshu Rai - Assistant Professor | Computer Science & Engineering',
  description: 'Academic portfolio of Dr. Himanshu Rai, Assistant Professor in Computer Science & Engineering, specializing in Deep Learning, Gen AI, TinyML, and Cloud Computing.',
  keywords: 'computer science, deep learning, generative AI, TinyML, cloud computing, machine learning, research, publications, teaching',
  authors: [{ name: 'Dr. Himanshu Rai' }],
  openGraph: {
    title: 'Dr. Himanshu Rai - Assistant Professor',
    description: 'Academic portfolio showcasing research in Deep Learning, Gen AI, TinyML, and Cloud Computing',
    type: 'website',
    url: 'https://dr-himanshu-rai-portfolio.netlify.app',
    siteName: 'Dr. Himanshu Rai - Academic Portfolio',
    images: [
      {
        url: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=1200',
        width: 1200,
        height: 630,
        alt: 'Dr. Sarah Johnson - Computer Science Professor'
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}