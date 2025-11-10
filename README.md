# React E-Commerce Showcase

A fully responsive e-commerce showcase web application built with **React**, **Bootstrap**, **Node.js**, and **Express**, connected to a hosted **SQL database**.  
This project focuses on displaying products and store information without implementing shopping cart or checkout functionality — making it ideal as a front-end and database integration demo.

---

## 🚀 Features

- ⚛️ **React Front-End:** Built using React for modular, component-based development.
- 🎨 **Bootstrap Component:** Uses Bootstrap for a product carousel on the home page.
- 🌐 **Express + Node.js Backend:** Handles API routes and server logic.
- 🗃️ **Hosted SQL Database Integration:** Connects to a hosted SQL database for dynamic product data.
- 📱 **Fully Responsive Design:** Optimized for desktop, tablet, and mobile viewing.
- 🔍 **Dynamic Product Listings:** Product data is fetched and rendered from the backend database and can also be filtered by type/category.
- 🧩 **Scalable Architecture:** Designed to easily extend with shopping cart or user authentication later.

---

## 🛠️ Tech Stack

### Front-End
- **React** (JavaScript)
- **Bootstrap 5**
- **Fetch API** for HTTP requests

### Back-End
- **Node.js**
- **Express.js**
- **SQL Database** (MySQL hosted instance)
- **dotenv** for environment variable management

---

## ⚙️ Getting Started

### Prerequisites
Before running the project, make sure you have:
- [Node.js](https://nodejs.org/en/) (v14+)
- npm or yarn
- Access to a hosted SQL database (e.g., MySQL on Render, Railway, or PlanetScale)

---

### Installation

1. Clone this repository:
   git clone <url>
   
Navigate into the project directory,
Install dependencies for both client and server:

cd client
npm install
cd ../server
npm install


Environment Variables
Create a .env file in the server directory and include:

PORT=3000
DB_HOST=<your_hosted_sql_host>
DB_USER=<your_database_user>
DB_PASSWORD=<your_database_password>
DB_NAME=<your_database_name>
DB_PORT=<your_hosted_db_port>

Running the App
(I strongly recommend running "npm i concurrently" in the root directory to run frontend and backend at once but alternatively you can run them seperately)
Start the backend:

cd server
npm start
Then start the frontend:

cd client
npm start
Access the app at:
👉 http://localhost:3000

