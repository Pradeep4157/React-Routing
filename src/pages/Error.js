import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>THIS IS ERROR PAGE</h1>
      {error.data ? error.data : "SOMETHING WENT WRONG IDK :( "};
    </div>
  );
};
export default Error;
