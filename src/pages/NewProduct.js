/*
    continue from 11:23

*/
import { Form, redirect } from "react-router-dom";
const NewProduct = () => {
  return (
    <Form method="post">
      <div>
        <input
          placeholder="Enter Product Name"
          name="name"
          title="name"
        ></input>
      </div>
      <button type="submit">Add</button>
    </Form>
  );
};
export async function action({ request }) {
  const data = await request.formData();

  const enteredName = data.get("name");
  console.log(enteredName);
  const response = await fetch(
    "https://react-post-request-58d9a-default-rtdb.firebaseio.com/products.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: Math.random() * 1000,
        name: enteredName,
      }),
    },
  );
  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Error in saving Product" }), {
      status: 500,
    });
  }
  return redirect("/products");
}
export default NewProduct;
