# To-Do-App

Welcome to To-Do-App! This is a Vanilla JavaScript to-do list app that lets you add, edit, and delete tasks, with LocalStorage used to keep track of your list in the browser.

## Live URL : https://to-do-vanillajs.netlify.app

```bash
https://to-do-vanillajs.netlify.app
```

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Installation Guide](#installation-guide)
- [Usage Instructions](#usage-instructions)
- [Author](#author)

## Project Overview

To-Do-App is a client-side to-do list manager. Users can add todo items with a title and description, edit either field, and delete items, with everything persisted locally via LocalStorage.

## Features

- **Add Todos:** Create todo items with a title and description.
- **Edit Todos:** Edit both the title and description of existing todo items.
- **Delete Todos:** Remove todo items from the list.
- **Local Persistence:** Todos are stored in LocalStorage, so they persist across page reloads.

## Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Storage:** Browser LocalStorage

## Folder Structure

```bash
To-Do-App/
├── index.html      # Main page markup
├── style.css       # Page styling
├── responsive.css   # Responsive layout adjustments
├── app.js          # Todo CRUD logic and LocalStorage handling
└── background.jpg   # Background image asset
```

## Installation Guide

### Prerequisites

- A modern web browser
- (Optional) A local static server such as VS Code's "Live Server" extension

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/rajesh-ranjan-git/To-Do-App.git
   cd To-Do-App
   ```

2. Open `index.html` directly in your browser, or serve the folder with a local static server:

   ```bash
   npx serve .
   ```

## Usage Instructions

1. Add a new todo item with a title and description.
2. Edit the title or description of an existing todo.
3. Delete todo items you no longer need.
4. Your todo list persists in the browser between visits.

## Author

- **Rajesh Ranjan** — [GitHub @rajesh-ranjan-git](https://github.com/rajesh-ranjan-git)

---
