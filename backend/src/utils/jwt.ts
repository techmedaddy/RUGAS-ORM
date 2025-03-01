import jwt from "jsonwebtoken";

export const generateToken = (userId: string) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET || "secretkey", {
    expiresIn: "7d",
  });
};
