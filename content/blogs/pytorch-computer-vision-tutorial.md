---
title: "Getting Started with PyTorch for Computer Vision: A Comprehensive Tutorial"
date: "2024-01-08"
author: "Dr. Himanshu Rai"
coverImage: "https://images.pexels.com/photos/1089440/pexels-photo-1089440.jpeg?auto=compress&cs=tinysrgb&w=800"
tags: ["PyTorch", "Computer Vision", "Deep Learning", "Tutorial", "Programming"]
---

# Getting Started with PyTorch for Computer Vision: A Comprehensive Tutorial

PyTorch has become one of the most popular deep learning frameworks, especially in the research community. Today, I'll walk you through building your first computer vision project using PyTorch.

## Why PyTorch for Computer Vision?

PyTorch offers several advantages for computer vision tasks:

- **Dynamic computation graphs**: Perfect for research and experimentation
- **Intuitive API**: Pythonic design that's easy to learn
- **Strong community**: Extensive documentation and community support
- **Research-friendly**: Used by top research labs worldwide

## Setting Up Your Environment

First, let's set up our development environment:

```bash
# Create a new conda environment
conda create -n pytorch-cv python=3.9
conda activate pytorch-cv

# Install PyTorch (adjust for your CUDA version)
conda install pytorch torchvision torchaudio pytorch-cuda=11.8 -c pytorch -c nvidia

# Install additional dependencies
pip install matplotlib jupyter notebook
```

## Building Your First Image Classifier

Let's build a simple image classifier using the CIFAR-10 dataset:

### 1. Import Required Libraries

```python
import torch
import torch.nn as nn
import torch.optim as optim
import torchvision
import torchvision.transforms as transforms
import matplotlib.pyplot as plt
import numpy as np
```

### 2. Data Preparation

```python
# Define transformations
transform_train = transforms.Compose([
    transforms.RandomHorizontalFlip(p=0.5),
    transforms.RandomRotation(10),
    transforms.ToTensor(),
    transforms.Normalize((0.4914, 0.4822, 0.4465), (0.2023, 0.1994, 0.2010))
])

transform_test = transforms.Compose([
    transforms.ToTensor(),
    transforms.Normalize((0.4914, 0.4822, 0.4465), (0.2023, 0.1994, 0.2010))
])

# Load datasets
trainset = torchvision.datasets.CIFAR10(root='./data', train=True,
                                        download=True, transform=transform_train)
trainloader = torch.utils.data.DataLoader(trainset, batch_size=128,
                                          shuffle=True, num_workers=2)

testset = torchvision.datasets.CIFAR10(root='./data', train=False,
                                       download=True, transform=transform_test)
testloader = torch.utils.data.DataLoader(testset, batch_size=100,
                                         shuffle=False, num_workers=2)
```

### 3. Define the Model

```python
class SimpleCNN(nn.Module):
    def __init__(self, num_classes=10):
        super(SimpleCNN, self).__init__()
        
        self.features = nn.Sequential(
            # First convolutional block
            nn.Conv2d(3, 64, kernel_size=3, padding=1),
            nn.BatchNorm2d(64),
            nn.ReLU(inplace=True),
            nn.Conv2d(64, 64, kernel_size=3, padding=1),
            nn.BatchNorm2d(64),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(kernel_size=2, stride=2),
            
            # Second convolutional block
            nn.Conv2d(64, 128, kernel_size=3, padding=1),
            nn.BatchNorm2d(128),
            nn.ReLU(inplace=True),
            nn.Conv2d(128, 128, kernel_size=3, padding=1),
            nn.BatchNorm2d(128),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(kernel_size=2, stride=2),
            
            # Third convolutional block
            nn.Conv2d(128, 256, kernel_size=3, padding=1),
            nn.BatchNorm2d(256),
            nn.ReLU(inplace=True),
            nn.Conv2d(256, 256, kernel_size=3, padding=1),
            nn.BatchNorm2d(256),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(kernel_size=2, stride=2),
        )
        
        self.classifier = nn.Sequential(
            nn.Dropout(0.5),
            nn.Linear(256 * 4 * 4, 512),
            nn.ReLU(inplace=True),
            nn.Dropout(0.5),
            nn.Linear(512, num_classes)
        )
    
    def forward(self, x):
        x = self.features(x)
        x = x.view(x.size(0), -1)
        x = self.classifier(x)
        return x
```

## Training Tips and Best Practices

### 1. Learning Rate Scheduling

```python
scheduler = optim.lr_scheduler.StepLR(optimizer, step_size=20, gamma=0.1)
```

### 2. Model Checkpointing

```python
# Save the best model
if val_accuracy > best_accuracy:
    best_accuracy = val_accuracy
    torch.save({
        'epoch': epoch,
        'model_state_dict': model.state_dict(),
        'optimizer_state_dict': optimizer.state_dict(),
        'loss': loss,
    }, 'best_model.pth')
```

## Common Pitfalls and Solutions

1. **Overfitting**: Use dropout, data augmentation, and early stopping
2. **Vanishing gradients**: Use batch normalization and proper weight initialization
3. **Learning rate issues**: Implement learning rate scheduling
4. **Memory problems**: Reduce batch size and use gradient accumulation

## Assignment for My Students

If you're taking my Computer Vision course, try this exercise:

1. Implement the CNN above and train it on CIFAR-10
2. Experiment with different data augmentations
3. Try transfer learning with a pre-trained ResNet
4. Compare results and write a brief report

## Conclusion

PyTorch provides an excellent foundation for computer vision research and applications. The key is to start simple, understand each component, and gradually add complexity.

*Feel free to reach out during office hours if you need help with any of these concepts!*