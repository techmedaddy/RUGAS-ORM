import prisma from "../config/db";

export const createOrder = async (data: any) => {
  try {
    return await prisma.order.create({ data });
  } catch (error) {
    console.error("Create Order Service Error:", error);
    throw new Error("Failed to create order");
  }
};

export const getAllOrders = async (query: any) => {
  try {
    return await prisma.order.findMany();
  } catch (error) {
    console.error("Get All Orders Service Error:", error);
    throw new Error("Failed to retrieve orders");
  }
};

export const getOrderById = async (id: string) => {
  try {
    return await prisma.order.findUnique({ where: { id } });
  } catch (error) {
    console.error("Get Order By ID Service Error:", error);
    throw new Error("Failed to retrieve order");
  }
};

export const updateOrderStatus = async (id: string, status: string) => {
  try {
    return await prisma.order.update({
      where: { id },
      data: { status },
    });
  } catch (error) {
    console.error("Update Order Status Service Error:", error);
    throw new Error("Failed to update order status");
  }
};

export const deleteOrder = async (id: string) => {
  try {
    return await prisma.order.delete({ where: { id } });
  } catch (error) {
    console.error("Delete Order Service Error:", error);
    throw new Error("Failed to delete order");
  }
};
