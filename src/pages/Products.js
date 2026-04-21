/*
  need to continue from 8:23

*/
import { Link } from "react-router-dom";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    name: "Product 1",
  },
  {
    id: "p2",
    name: "Product 2",
  },
  {
    id: "p3",
    name: "Product 3",
  },
];
export const Products = () => {
  return (
    <div>
      <h1>THIS IS PRODUCTS PAGE </h1>
      {DUMMY_PRODUCTS.map((prod) => (
        <li>
          <Link to={`/products/${prod.id}`}>{prod.name}</Link>
        </li>
      ))}
    </div>
  );
};
