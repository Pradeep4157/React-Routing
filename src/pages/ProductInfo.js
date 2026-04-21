import { useParams } from "react-router-dom";
const ProductInfo = () => {
  const params = useParams();

  return (
    <>
      <h1>ProductInfo</h1>;<div>{params.productId}</div>;
    </>
  );
};

export default ProductInfo;
