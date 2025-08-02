---
title: Dumb Fish chess
author: Weston Gorczyca
pubDatetime: 2025-08-2T12:43:58.855Z
slug: dumb-fish-chess
featured: true
draft: false
tags:
  - flutter
  - web
ogImage: https://res.cloudinary.com/noezectz/v1663745737/astro-paper/astropaper-x-forestry-og_kqfwp0.png
description:
  Just a dumb chess engine
---

# Chess

A multi-platform chess application built with Flutter, with a separate basic Python implementation.

## Project Structure

This repository contains two main components:

- **`/app`**: A full-featured, multi-platform chess game built using the Flutter framework.
- **`/chess_basic_python`**: A simple, command-line based chess implementation in Python.

## Flutter Application (`/app`)

This is the main application, designed to run on web, mobile, and desktop from a single codebase.

### Running the App

1. Navigate to the `app` directory:
   ```bash
   cd app
   ```
2. Install dependencies:
   ```bash
   flutter pub get
   ```
3. Run the application on your desired platform (e.g., Chrome):
   ```bash
   flutter run -d chrome
   ```

## Python Implementation (`/chess_basic_python`)

A simple script to play chess in the terminal.

### Running the Script

1. Navigate to the `chess_basic_python` directory:
   ```bash
   cd chess_basic_python
   ```
2. (Optional, but recommended) Create and activate a virtual environment.
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the script:
   ```bash
   python main.py
   ```
