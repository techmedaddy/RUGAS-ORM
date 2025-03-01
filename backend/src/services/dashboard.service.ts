import prisma from "../lib/prismaClient";

export const getDashboardData = async () => {
  const totalProducts = await prisma.product.count();
  const totalOrders = await prisma.order.count();

  // ✅ Corrected revenue aggregation query
  const totalRevenue = await prisma.order.aggregate({
    _sum: { price: true },
  });

  const recentOrders = await prisma.order.findMany({
    take: 5,
    orderBy: { id: "desc" }, // Ensure order creation timestamp exists
    include: { product: true },
  });

  return {
    totalProducts,
    totalOrders,
    totalRevenue: totalRevenue._sum?.price || 0,
    recentOrders,
  };
};
