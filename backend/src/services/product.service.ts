import prisma from "../config/db";

export const createProduct = async (data: any) => {
  try {
    return await prisma.product.create({ data });
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
};

export const getAllProducts = async () => {
  try {
    return await prisma.product.findMany();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getProductById = async (id: string) => {
  try {
    return await prisma.product.findUnique({ where: { id } });
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    throw error;
  }
};

export const updateProduct = async (id: string, data: any) => {
  try {
    return await prisma.product.update({ where: { id }, data });
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};

export const deleteProduct = async (id: string) => {
  try {
    return await prisma.product.delete({ where: { id } });
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};
