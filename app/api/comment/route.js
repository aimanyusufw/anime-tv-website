import prisma from "@/lib/prisma";
import { authUserSession } from "@/lib/user-data-lib";

export const POST = async (request) => {
  try {
    const user = await authUserSession();
    const { animeMalId, content, animeTitle } = await request.json();
    const data = { animeTitle, animeMalId, content, userId: user.id };
    const createComment = await prisma.comment.create({
      data,
    });
    if (!createComment) {
      return Response.json({ status: 500, isCreated: false });
    }
    return Response.json({ status: 200, isCreated: true });
  } catch (error) {
    console.error(error);
    return Response.error(error.message);
  }
};

export const DELETE = async (request) => {
  try {
    const { id } = await request.json();
    const removeComment = await prisma.comment.delete({ where: { id } });

    if (!removeComment) {
      return Response.json({ status: 500, isDeleted: false });
    }
    return Response.json({ status: 200, isDeleted: true });
  } catch (error) {
    return Response.json({ status: 500, message: "Somenthing wrong" });
  }
};
