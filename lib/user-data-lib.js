import { getServerSession } from "next-auth";
import { authOptions } from "./auth-options-lib";

export const authUserSession = async () => {
  const user = await getServerSession(authOptions);
  return user?.user;
};
