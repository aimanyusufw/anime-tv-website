import { authOptions } from "@/lib/auth-options-lib";
import prisma from "@/lib/prisma";
import { authUserSession } from "@/lib/user-data-lib";

export const GET = async (request, context) => {
  try {
    const user = await authUserSession();
    const isCollectedByAuthUser = await prisma.collection.findFirst({
      where: {
        userId: user.id,
        animeMalId: parseInt(context.params.animeMalId),
      },
    });
    if (!isCollectedByAuthUser) {
      return Response.json({ status: 404, message: "Not found" });
    }
    return Response.json({
      status: 200,
      message: "Success",
      id: isCollectedByAuthUser.id,
    });
  } catch (error) {
    console.error(error);
    return Response.json({
      status: 500,
      message: "Internal Server Error",
    });
  }
};
