"use server";

import { prisma } from "@/utils/prisma";

export async function createTodo(formData: FormData){
    const input = formData.get('input') as string;
    if(!input.trim()) {
        return;
    }

    await prisma.todo.create({
        data:{
            title:input,
        },
    });

}