import { request } from "@frontend/utils/request";
import { User } from "@repo/models/user";

export async function fetchUsers() {
  const users = await request<User[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/users`
  );
  return users;
}
