"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export default async function createPost(formData: FormData){
   const title =  formData.get("title");
    const content = formData.get("content");

    await prisma.post.create({
        data:{
            title,
            content,
        },
    });
    revalidatePath("/posts");
}