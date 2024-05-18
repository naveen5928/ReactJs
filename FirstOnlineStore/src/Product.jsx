import { useState } from "react";
/* eslint-disable react/prop-types */

export default function Product(props) {
  const [count, setCount] = useState(0);
  console.log(props);
  function handleIncrementClick() {
    setCount(count + 1);
  }
  function handleDecrementClick() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  if (!props.details) {
    return null;
  }

  return (
    <div className="product">
      <div className="product-info">
        <h2>{props.details.name}</h2>
        <p>{props.details.description}</p>
      </div>
      <div className="product-buttons">
        <button
          className="product-sub"
          disabled={count === 0}
          onClick={handleDecrementClick}>
          -
        </button>
        <h3 className="product-count">{count ? count : ""}</h3>
        <button className="product-add" onClick={handleIncrementClick}>
          +
        </button>
      </div>
    </div>
  );
}
