export async function getAllTodos() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
    if (!res.ok) throw new Error("Failed to fetch todos");
    return res.json();
  }
  

  export async function getSingleTodo(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    if (!res.ok) throw new Error("Failed to fetch todo");
    return res.json();
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