import { Request, Response } from "express";
import * as dashboardService from "../services/dashboard.service";

export const getDashboardData = async (req: Request, res: Response) => {
  try {
    const data = await dashboardService.getDashboardData();
    res.json(data);
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
