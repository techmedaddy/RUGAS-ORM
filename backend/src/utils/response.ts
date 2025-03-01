import { Response } from "express";

export const successResponse = (
  res: Response,
  data: any,
  message: string = "Success"
) => {
  return res.status(200).json({ message, data });
};

export const createdResponse = (
  res: Response,
  data: any,
  message: string = "Created successfully"
) => {
  return res.status(201).json({ message, data });
};

export const errorResponse = (
  res: Response,
  message: string,
  status: number = 500
) => {
  return res.status(status).json({ error: message });
};
