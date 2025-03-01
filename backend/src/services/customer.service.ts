import prisma from "../config/db";

export const createCustomer = async (data: any) => {
  return prisma.user.create({ data });
};

export const getAllCustomers = async () => {
  return prisma.user.findMany();
};

export const getCustomerById = async (id: string) => {
  return prisma.user.findUnique({ where: { id } });
};

export const updateCustomer = async (id: string, data: any) => {
  return prisma.user.update({ where: { id }, data });
};

export const deleteCustomer = async (id: string) => {
  return prisma.user.delete({ where: { id } });
};
