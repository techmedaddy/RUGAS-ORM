import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes";
import customerRoutes from "./routes/customer.routes";
import productRoutes from "./routes/product.routes";
import orderRoutes from "./routes/order.routes";
import dashboardRoutes from "./routes/dashboard.routes"; // ✅ Dashboard Route Included
import { errorHandler } from "./middleware/errorHandler";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Supports form data
app.use(helmet()); // Security headers
app.use(morgan("dev")); // Logging

// ✅ API Routes
app.use("/api/auth", authRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/dashboard", dashboardRoutes); // ✅ Dashboard Insights API

// ✅ Health Check Route
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "API running!" });
});

// ✅ Global Error Handler Middleware
app.use(errorHandler);

// ✅ Fallback route for unknown endpoints
app.use((req, res) => {
  res.status(404).json({ message: "API endpoint not found" });
});

export default app;
