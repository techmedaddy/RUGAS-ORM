# Rugas Order Management

### Project Overview

This is a full-stack order management application where users can onboard customers, create orders, update order status, and manage products. 
The backend is built with Node.js, Express.js, and a database, while the frontend uses React.js. The entire system runs inside Docker containers using docker-compose.yml.


![WhatsApp Image 2025-03-01 at 15 44 28_76b59ecb](https://github.com/user-attachments/assets/9560b532-558a-4cbd-b13f-9c91a6c2d965)


## 🛠️🖥️ System Design 
![WhatsApp Image 2025-04-01 at 14 08 32_139ecc43](https://github.com/user-attachments/assets/dce1c486-4fee-40c4-a215-9da7d2f8d09e)



### Tech Stack

**Frontend:**
- React.js with Vite
- Tailwind CSS for UI design
- React Router for navigation
- Redux Toolkit for state management

**Backend:**
- Node.js with Express.js
- PostgreSQL as the database (can be switched to MongoDB if needed)
- Sequelize ORM for database interactions
- JWT for authentication

**Features**
- **Customer Management:** Add new customers with details (name, address, phone, email)
- **Product Management:** Store product name, category, description, images, and price
- **Order Management:** Place orders, update order statuses (Placed, Shipped, Delivered, Cancelled)
- **Filtering & Searching:** Filter orders by status, customer, category, etc.
- **Dashboard:** View order statistics
- **Authentication:** Secure user login and session management using JWT


## Setup Instructions

### Prerequisites:
- Install [Node.js](https://nodejs.org/)
- Install [Docker](https://www.docker.com/)
- Install [Git](https://git-scm.com/)

### Clone the Repository:
```sh
git clone https://github.com/yourusername/rugas-orm-demo.git
cd rugas-orm-demo
```

## Configure Environment Variables:

Create a .env file in the backend folder:

```sh
PORT=5000
DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
JWT_SECRET=your_jwt_secret
```

## Running the Application

Use Docker Compose to start all services:

```sh
docker-compose up --build
```


This will:


Start the backend on 
```sh 
http://localhost:5000
```
Start the frontend on 
```sh 
http://localhost:3000
```
## Set up PostgreSQL database inside a container
  ### API Endpoints
  Customer Routes:
  ```sh 
POST /api/customers - Add a new customer
GET /api/customers - List all customers
```
Product Routes:
 ```sh 
POST /api/products - Add a new product
GET /api/products - List all products
```
Order Routes:
 ```sh 
POST /api/orders - Create a new order
GET /api/orders - List all orders
PATCH /api/orders/:id/status - Update order status

```
##  Project Structure
 ```sh 
rugas-orm-demo/
│── backend/                     # Express.js Backend
│   ├── src/
│   │   ├── config/               # Config files (DB, Cloudinary, etc.)
│   │   │   ├── db.ts             # PostgreSQL & Prisma setup
│   │   │   ├── cloudinary.ts     # Cloudinary configuration
│   │   │   ├── env.ts            # Environment variable loader
│   │   ├── controllers/          # Business logic controllers
│   │   │   ├── auth.controller.ts
│   │   │   ├── customer.controller.ts
│   │   │   ├── order.controller.ts
│   │   │   ├── product.controller.ts
│   │   ├── middleware/           # Express middlewares
│   │   │   ├── auth.middleware.ts
│   │   │   ├── errorHandler.ts
│   │   │   ├── validateRequest.ts
│   │   ├── models/               # Prisma schema models
│   │   │   ├── prisma.schema
│   │   ├── routes/               # API routes
│   │   │   ├── auth.routes.ts
│   │   │   ├── customer.routes.ts
│   │   │   ├── order.routes.ts
│   │   │   ├── product.routes.ts
│   │   ├── services/             # Service layer for database interaction
│   │   │   ├── auth.service.ts
│   │   │   ├── customer.service.ts
│   │   │   ├── order.service.ts
│   │   │   ├── product.service.ts
│   │   ├── utils/                # Utility functions
│   │   │   ├── response.ts        # Standardized API responses
│   │   │   ├── jwt.ts             # JWT token utilities
│   │   ├── app.ts                # Express app configuration
│   │   ├── server.ts             # Server entry point
│   ├── prisma/
│   │   ├── migrations/           # Prisma migrations
│   │   ├── seed.ts               # Sample seed data
│   ├── .env                      # Environment variables
│   ├── Dockerfile                # Dockerfile for backend
│   ├── docker-compose.yml        # Docker-compose for full stack setup
│   ├── package.json              # Backend dependencies
│   ├── tsconfig.json             # TypeScript configuration
│
│── frontend/                     # Next.js Frontend
│   ├── src/
│   │   ├── components/           # Reusable components
│   │   │   ├── Navbar.tsx
│   │   │   ├── OrderList.tsx
│   │   │   ├── ProductCard.tsx
│   │   ├── hooks/                # Custom hooks (useAuth, useOrders, etc.)
│   │   ├── lib/                  # API calls (Axios, etc.)
│   │   │   ├── api.ts
│   │   ├── pages/                # Next.js Pages
│   │   │   ├── index.tsx         # Home page
│   │   │   ├── login.tsx         # Login page
│   │   │   ├── dashboard.tsx     # Dashboard page
│   │   │   ├── customers.tsx     # Customer management page
│   │   │   ├── products.tsx      # Product management page
│   │   │   ├── orders.tsx        # Order management page
│   │   ├── store/                # Global state (Zustand or Redux)
│   │   ├── styles/               # Global styles
│   ├── public/                   # Static assets
│   ├── .env                      # Frontend environment variables
│   ├── next.config.js            # Next.js configuration
│   ├── Dockerfile                # Dockerfile for frontend
│   ├── package.json              # Frontend dependencies
│   ├── tsconfig.json             # TypeScript configuration
│
│── .gitignore                     # Ignore files
│── README.md                       # Project documentation
```
