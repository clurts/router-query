import { useLoaderData } from "react-router"
import { Link } from "react-router"
import { useQuery } from "@tanstack/react-query"


// export async function loader() {
//     return queryClient.fetchQuery({
//         queryKey:['todos'],
//         queryFn: getTodos
//     })
// }


export default function Home() {
    const todos = useLoaderData()
    useQuery({
        queryKey: ['todos'],
        initialData: todos
    })



    return (
        <>
            <h1>React Query Home</h1>
            {todos.map(todo => (
                <Link to={`/todo/${todo.id}`} key={todo.id}>
                    <p>{todo.title} </p>
                </Link>           
            ))}
        </>
    )
}