import { Request, Response } from "express";
import * as authService from "../services/auth.service";
import { generateToken } from "../utils/jwt";

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "Name, email, and password are required." });
  }

  try {
    const user = await authService.register({ name, email, password });
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ error: "Registration failed." });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required." });
  }

  try {
    const user = await authService.login({ email, password });

    if (user) {
      const token = generateToken(user.id);
      res.json({ token });
    } else {
      res.status(401).json({ error: "Invalid credentials." });
    }
  } catch (error) {
    res.status(500).json({ error: "Login failed." });
  }
};
