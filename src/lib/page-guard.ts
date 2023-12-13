import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";

export const pageGuard = async () => {
  const session = await getServerAuthSession();

  if (!session) {
    redirect("/auth/signin");
  }
};
