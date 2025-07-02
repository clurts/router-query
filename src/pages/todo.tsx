import { useLoaderData } from "react-router"
import { queryClient } from "../queryClient"
import { getSingleTodo } from "../api/todos"
import React from "react"


export async function loader({ params }) {
  console.log(params)
    return queryClient.fetchQuery({
            queryKey:['todos', params.id],
            queryFn: () => getSingleTodo(params.id),
        })
}

export default function Todo() {
  
    const todo = useLoaderData()

    console.log(todo)

  return (
    <div>
        <h1>Todo</h1>
        
            <article>
            <h2>{todo.title}</h2>
            <p>{todo.completed ? "Completed" : "Not Completed"}</p>
            </article>
       
    </div>
  )
}