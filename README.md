<div align="center">

# ✅ Angular Todo App

**A simple Todo application built with Angular as part of my learning journey.**  
Focused on practicing modern Angular concepts and building a real-world mini application.

---

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![JSON Server](https://img.shields.io/badge/JSON_Server-000000?style=for-the-badge&logo=json&logoColor=white)

</div>

---

## ✨ Features

| Feature | Description |
|---|---|
| ➕ Add Tasks | Quickly add new tasks from a dedicated page |
| ✅ Complete Tasks | Mark tasks as done with one click |
| ❌ Delete Tasks | Remove tasks you no longer need |
| 🔁 Page Navigation | Navigate between Todo List and Create Task pages |
| ⚡ Optimistic UI | Instant UI updates without waiting for async ops |
| 🔍 Search Tasks | Filter tasks instantly using the search bar |

---

## 🛠️ Technologies Used

- **Angular** — Frontend framework
- **Angular Standalone Components** — Modern component architecture
- **Angular Signals** — Reactive state management
- **Angular Router** — Client-side navigation
- **Reactive Forms** — Form handling & validation
- **Bootstrap** — UI styling
- **JSON Server** — Fake REST API for local development

---

## 📂 Project Structure

```
angular-todo-app/
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── todo-list/            # Main list component
│   │   │   │   └── todo-item/        # Single task component (nested)
│   │   │   └── create-todo-item/     # Add task form component
│   │   │
│   │   ├── app.component.ts
│   │   └── app-routing.module.ts
│   │
│   └── main.ts
│
├── angular.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) `v16+`
- [Angular CLI](https://angular.io/cli)

```bash
npm install -g @angular/cli
```

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/amlgamal/Todo-Angular.git

# 2. Navigate into the project
cd Todo-Angular

# 3. Install dependencies
npm install

# 4. Run JSON Server (in a separate terminal)
npx json-server db.json

# 5. Run the development server
ng serve
```

Then open your browser and visit: **`http://localhost:4200`** 🎉

---

## 📚 What I Learned

Through this project I practiced:

- Building applications using **Angular Standalone Components**
- Managing state using **Angular Signals**
- Implementing **routing between pages**
- Creating **CRUD operations**
- Structuring a clean Angular application

---

## 🔗 Repository

GitHub: [https://github.com/amlgamal/Todo-Angular](https://github.com/amlgamal/Todo-Angular)

---

## 💬 Feedback

Any feedback or suggestions are welcome! Feel free to open an issue or reach out. 😊

---

<div align="center">

Made with ❤️ using Angular

⭐ **If you found this helpful, give it a star!** ⭐

</div>
