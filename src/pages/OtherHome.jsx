import { useLoaderData } from "react-router"
import { Link } from "react-router"
import { getAllTodos } from "../api/todos"
import { queryClient } from '../queryClient.js'


export async function loader() {
    return queryClient.fetchQuery({
        queryKey:['todos'],
        queryFn: getAllTodos
    })
}


export default function Home() {
    const todos = useLoaderData()

    return (
        <>
            <h1>React Query Home</h1>
            {todos.map(todo => (
                <Link to={`/todo/${todo.id}`} key={todo.id}>
                    <p>{todo.title}</p>
                </Link>           
            ))}
        </>
    )
}