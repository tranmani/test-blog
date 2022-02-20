import React from "react";
import { useParams } from "react-router-dom";

const DetailPage: React.FC = () => {
  const { articleName } = useParams();
  return (
    <>
      <div>{articleName} Detail page</div>
    </>
  );
};

export default DetailPage;
