import AddTodo from "@/componets/todos/AddTodo";
import Todo from "@/componets/todos/Todo";
import { todoProps } from "@/types";


import { prisma } from "@/utils/prisma";
import { Key } from "react";

async function getData(){
  const data = await prisma.todo.findMany({
    select: {
    title: true,
    id:true,
    isCompleted: true,
  },
  orderBy: {
    createAt: "asc",
  },
  });

  return data;
}

export default async function Home() {
  const data = await getData();
  return (
   <div className= "w-screen py-20 flex justify-center flex-col items-center">
    <span className="text-3xl font-extrabold uppercase">Todo App</span>
    <h1 className="text-4xl font-extrabold uppercase mb-5 text center">
      <span className="lowercase">w/</span>server actions
    </h1>

    <div className="flex justify-center flex-col items-center">
      <AddTodo />
      
      <div className= "flex flex-col gap-5 items-center justify-center mt-10 2-screen">
        {data.map((todo: todoProps, id: Key | null | undefined) => (
          <div className="w-full" key={id}>
            < Todo todo={todo} />
            </div>
        ))}
       </div>
    </div>
   </div>
  );
}
