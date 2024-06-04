import prisma from "@/lib/prisma";

export const POST = async (request) => {
  try {
    const { animeMalId, image, title, episodes, score, userId } =
      await request.json();
    const data = { animeMalId, image, title, episodes, score, userId };

    const createCollection = await prisma.collection.create({ data });

    if (!createCollection)
      return Response.json({ status: 500, isCreated: false });

    return Response.json({ status: 201, isCreated: true });
  } catch (error) {
    console.log(error);
  }
};

export const DELETE = async (request) => {
  try {
    const { id } = await request.json();
    const deleteCollection = await prisma.collection.delete({
      where: { id },
    });

    if (!deleteCollection) {
      return Response.json({ status: 500, isDeleted: false });
    }

    return Response.json({ status: 201, isDeleted: true });
  } catch (error) {
    console.log(error);
  }
};
