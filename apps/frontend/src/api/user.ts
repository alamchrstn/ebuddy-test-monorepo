import { request } from "@frontend/utils/request";
import { User } from "@repo/models/user";

export async function fetchUsers() {
  // 📝 enable this to mock error and see resulting UI
  // throw new Error("Not implemented");

  // 📝 enable this to mock longer loading and see resulting UI
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  const users = await request<User[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/users`
  );
  return users;
}
