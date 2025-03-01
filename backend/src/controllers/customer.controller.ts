import { Request, Response } from "express";
import * as customerService from "../services/customer.service";

export const createCustomer = async (req: Request, res: Response) => {
  const customer = await customerService.createCustomer(req.body);
  res.status(201).json(customer);
};

export const getCustomers = async (req: Request, res: Response) => {
  const customers = await customerService.getAllCustomers();
  res.json(customers);
};

export const getCustomerById = async (req: Request, res: Response) => {
  const customer = await customerService.getCustomerById(req.params.id);
  if (customer) res.json(customer);
  else res.status(404).json({ message: "Customer not found" });
};

export const updateCustomer = async (req: Request, res: Response) => {
  const customer = await customerService.updateCustomer(req.params.id, req.body);
  res.json(customer);
};

export const deleteCustomer = async (req: Request, res: Response) => {
  await customerService.deleteCustomer(req.params.id);
  res.status(204).end();
};
