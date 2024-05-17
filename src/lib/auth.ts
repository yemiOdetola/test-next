import { cookies } from "next/headers";

export const isAuthenticated = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  return token !== undefined;
};

