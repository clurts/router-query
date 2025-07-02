import { queryClient } from "../queryClient";
import { performQuery } from "../utils/queries";

export async function getTodos() {
  return performQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
      if (!res.ok) throw new Error("Failed to fetch todos");
      return res.json();
    },
  });
}
  

  export async function getSingleTodo({ params }) {
    return queryClient.fetchQuery({
      queryKey: ["todo", params.id],
      queryFn: async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`);
        if (!res.ok) throw new Error("Failed to fetch todo");
        return res.json();
      },
    });
    
  }
  

  export async function createTodo({ title }) {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify({ title }),
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) throw new Error("Failed to create todo");
    return res.json();
  }