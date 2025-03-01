import { Router } from "express";
import prisma from "../lib/prismaClient";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const totalProducts = await prisma.product.count();
    const totalOrders = await prisma.order.count();

    // ✅ Corrected revenue aggregation query
    const totalRevenue = await prisma.order.aggregate({
      sum: { price: true }, // ✅ Changed `productPrice` to `price`
    });

    const recentOrders = await prisma.order.findMany({
      take: 5,
      orderBy: { orderDate: "desc" }, // ✅ Ensure `orderDate` exists in schema
      include: { product: true },
    });

    res.json({
      totalProducts,
      totalOrders,
      totalRevenue: totalRevenue.sum?.price || 0, // ✅ Fixed reference
      recentOrders,
    });
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
