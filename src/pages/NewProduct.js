/*
    continue from 11:23

*/
import { Form } from "react-router-dom";
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
  const response = fetch(
    "https://react-post-request-58d9a-default-rtdb.firebaseio.com/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    },
  );
}
export default NewProduct;
