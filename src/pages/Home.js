/*
  to move to some other page we have 2 options : 

    i) that we use anchor tag 

    -> The Problem with this is that the page gets refreshed and we lose the states..

    so instead of anchor tag we use Link which is provided by react-router-dom

*/
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/products");
  }
  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick}>Click to go to Products</button>
    </div>
  );
};
export default Home;
