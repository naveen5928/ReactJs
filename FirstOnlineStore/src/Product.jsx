import { useState } from "react";

export default function Product(props) {
  console.log(props);
  const { name, description, image } = props.details;
  const [count, setCount] = useState(0);
  const [enable, setEnable] = useState(false);

  const handleDecrementClick = () => {
    if (count >= 0) return setCount(count - 1);
  };
  const handleIncrementClick = () => {
    return setCount(count + 1);
  };
  return (
    <div className="product">
      <img width="50" src={image} alt="" />
      <div className="product-info">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <div className="product-buttons">
        <button
          disabled={count === 0}
          className="product-sub"
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
