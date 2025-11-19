# React E-Commerce Showcase

A fully responsive e-commerce showcase web application built with **React**, **Bootstrap**, **Node.js**, and **Express**, connected to a hosted **SQL database**.  
Originally designed as a front-end and database integration demo, the project has now been expanded to include **Add to Cart functionality** and a **Shopping Cart page** using **sessionStorage** and **React hooks** for dynamic updates.

---

## 🛠️ Tech Stack Badges

### Front-End
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)


### Storage / State
[![Session Storage](https://img.shields.io/badge/Session_Storage-4A90E2?style=for-the-badge&logo=googlechrome&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)

### Back-End
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![dotenv](https://img.shields.io/badge/dotenv-ECD53F?style=for-the-badge&logo=dotenv&logoColor=black)](https://github.com/motdotla/dotenv)

### Tools / Other
[![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![Railway](https://img.shields.io/badge/Railway-0B0D0E?style=for-the-badge&logo=railway&logoColor=white)](https://railway.app/)
[![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white)](https://code.visualstudio.com/)

---

## 🚀 Features

- ⚛️ **React Front-End:** Modular, component-based architecture.
- 🎨 **Bootstrap Components:** Includes a responsive product carousel on the home page.
- 🛒 **Add to Cart Functionality:** Users can add products to their cart from the shop page.
- 🛍️ **Shopping Cart Page:** Displays cart contents using sessionStorage with persistent session-based data.
- 🔄 **Dynamic Cart Updates:** Cart state is controlled by React hooks for instant UI updates including increasing quantity and removing items.
- 🌐 **Express + Node.js Backend:** Handles product API routes and server logic.
- 🗃️ **Hosted SQL Database:** Retrieves product data dynamically from a live MySQL database.
- 📱 **Mobile-Responsive Layout:** Optimized for all screen sizes.
- 🔍 **Product Filtering:** Products can be filtered by category/type.
- 🧩 **Scalable Structure:** Easy to enhance with future features like checkout or user authentication.

---

## 🛠️ Tech Stack

### Front-End
- **React** (JavaScript)
- **Bootstrap 5**
- **Fetch API**
- **React Hooks**
- **sessionStorage**

### Back-End
- **Node.js**
- **Express.js**
- **MySQL (hosted instance)**
- **dotenv**

---

## ⚙️ Getting Started

### Prerequisites

Ensure you have:

- [Node.js](https://nodejs.org/) (v14+)
- npm
- A hosted SQL database (Railway, Render, PlanetScale, etc.)

---

## 📦 Installation

1. Clone the repository


2. Navigate into the project and install dependencies:
- cd client
- npm install
- cd ../server
- npm install

3. Create a **.env** file in the **server** directory:


PORT=3000


DB_HOST=<your_hosted_sql_host>


DB_USER=<your_database_user>


DB_PASSWORD=<your_database_password>


DB_NAME=<your_database_name>


DB_PORT=<your_hosted_db_port>

4. Run the app:
- cd server
- node server.js


- cd client
- npm run dev

(Optional but recommended: configure **concurrently** to run both at once.)

---

## 🌐 Access the App

👉 http://localhost:5173

---

