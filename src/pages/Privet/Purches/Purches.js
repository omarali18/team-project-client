import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Purches = () => {
  const { id } = useParams();
  const [purches, setPurches] = useState({});
  console.log(purches);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        const d = data.find((p) => p._id === id);
        setPurches(d);
      });
  }, [id]);
  return (
    <>
      <div>
        <h2>THis: {purches?._id}</h2>
      </div>
    </>
  );
};

export default Purches;
