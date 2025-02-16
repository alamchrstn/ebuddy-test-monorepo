import { getAuth } from "./auth";

export async function request<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  const auth = getAuth();
  const user = auth.currentUser;
  const idToken = await user?.getIdToken();

  const response = await fetch(url, {
    ...options,
    headers: {
      authorization: `Bearer ${idToken}`,
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}
