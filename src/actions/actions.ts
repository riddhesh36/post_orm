"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export default async function createPost(formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  if (!title || !content) {
    throw new Error("Title and content are required");
  }

  await prisma.post.create({
    data: {
      title,
      content,
    },
  });

  // Revalidate /posts page after creating
  revalidatePath("/posts");
}
