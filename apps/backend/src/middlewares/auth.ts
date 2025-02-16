import { RequestHandler } from "express";
import { extractAuthToken } from "../utils/auth";
import { auth } from "../services/firebase";

export const authMiddleware: RequestHandler = async (req, res, next) => {
  const authToken = extractAuthToken(req.headers.authorization);
  if (!authToken) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // authorize with firebase auth
  try {
    await auth.verifyIdToken(authToken);
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Unauthorized" });
  }
};
