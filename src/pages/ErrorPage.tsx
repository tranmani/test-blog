import React from "react";
import { useParams } from "react-router-dom";

const ErrorPage: React.FC = () => {
  const params = useParams();

  return (
    <>
      <div>{params["*"]} Error page</div>
    </>
  );
};

export default ErrorPage;
