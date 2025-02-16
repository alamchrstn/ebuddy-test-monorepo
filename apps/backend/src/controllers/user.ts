import express from "express";
import { getAllUsers, getUsersBy } from "../repositories/users";
import { User, UserSearchQueryParam } from "@repo/models/user";
import { authMiddleware } from "../middlewares/auth";

const router = express.Router();

router.use(authMiddleware);

router.get("/", async (req, res) => {
  try {
    const query = req.query as Partial<UserSearchQueryParam>;
    const { searchBy, searchValue } = query;

    let users: User[];

    if (searchValue) {
      users = await getUsersBy(searchValue, searchBy);
    } else {
      users = await getAllUsers();
    }

    res.status(users.length > 0 ? 200 : 404).json(users);
  } catch (error) {
    const message = (error as Error).message ?? "Internal server error";
    res.status(500).json({ message });
  }
});

export default router;
