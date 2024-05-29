import { useState, useEffect } from "react";
import ProductsList from "./ProductsList.jsx";
import AddProductForm from "./AddProductForm.jsx";

export default function StoreFront() {
  const [products, setProducts] = useState(() => {
    const items = JSON.parse(localStorage.getItem("products"));
    return items ?? [];
  });
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [validation, setValidation] = useState("");
  useEffect(() => {
    if (products.length === 0) {
      document.title = "No Products";
    } else if (products.length === 1)
      document.title = `${products.length} product`;
    else if (products.length >= 2) {
      document.title = `${products.length} products`;
    }

    return localStorage.setItem("products", JSON.stringify(products));
  }, [products]);
  function handleFormSubmit(event) {
    event.preventDefault();

    if (!name) {
      setValidation("Please enter a name");
      return;
    }
    if (!description) {
      setValidation("Please enter a description");
      return;
    }
    setProducts([
      ...products,
      {
        id: products.length + 1,
        name: name,
        description: description,
      },
    ]);
    setName("");
    setDescription("");
    setValidation("");
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleDeleteClick(id) {
    setProducts(products.filter((product) => product.id !== id));
  }

  return (
    <>
      <AddProductForm
        name={name}
        description={description}
        validation={validation}
        onNameChange={handleNameChange}
        onDescriptionChange={handleDescriptionChange}
        onFormSubmit={handleFormSubmit}
      />
      <div>{products.length === 0 && <p>Add your first product</p>}</div>
      <ProductsList products={products} onDeleteClick={handleDeleteClick} />
    </>
  );
}
