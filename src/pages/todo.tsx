import { useLoaderData } from "react-router"
import { useQuery } from "@tanstack/react-query"
import React from "react"


export async function getSingleTodo({ params }) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoId}`)
    if (!response.ok) {
        throw new Response("Not Found", { status: 404 })
    }
    let todo = await response.json()
    return todo
}

export default function Todo() {
    const preLoadedTodo = useLoaderData()

    const { data: todo, isLoading, error } = useQuery({
        queryKey: ["todo", preLoadedTodo.id],
        queryFn: () => getSingleTodo({ params: { id: preLoadedTodo.id } }),
        initialData: preLoadedTodo,
    })

  return (
    <div>
        <h1>Todo</h1>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error.message}</p>}
        {todo && (
            <article>
            <h2>{todo.title}</h2>
            <p>{todo.completed ? "Completed" : "Not Completed"}</p>
            </article>
        )}
    </div>
  )
}