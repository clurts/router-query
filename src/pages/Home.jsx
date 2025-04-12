import { useLoaderData } from "react-router"
export async function loader() {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts")
    return await res.json()
}

export default function Home() {

    const todos = useLoaderData(loader)
    console.log(todos)
    return (
        <>
        <h1>Home</h1>
        {todos.map(todo => <p>{todo.title}</p>)}
        </>
    )
}