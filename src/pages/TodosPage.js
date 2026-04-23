/*
    need to cont from 5:33
*/
import { useLoaderData } from "react-router-dom";
const TodosPage = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <h1>Todos Page</h1>
      {data.map((todo) => {
        return <li key={todo.id}>{todo.title}</li>;
      })}
    </div>
  );
};
export async function todosLoader() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    if (!response.ok) {
      throw new Response("Error in Fetching Data", {
        status: response.status,
      });
    }
    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-type": "application/json; utf-8",
      },
    });
  } catch (error) {
    throw new Response("SOMETHING WENT WRONG", {
      status: error.status,
    });
  }
}
export default TodosPage;
