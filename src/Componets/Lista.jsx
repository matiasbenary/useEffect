import { useEffect, useState } from "react";
import productsArray from "./products";
const Lista = () => {
  const [products, setProducts] = useState(productsArray);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterPrice, setFilterPrice] = useState(0);

  useEffect(() => {
    setProducts(
      productsArray.filter(
        (product) =>
          product.title.includes(filterTitle) && product.price >= filterPrice
      )
    );
  }, [filterTitle]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setFilterTitle(e.target.value);
        }}
      />
      <input
        type="number"
        onChange={(e) => {
          setFilterPrice(Number(e.target.value));
        }}
      />
      {products.map((product) => (
        <div>
          {product.title} {product.price}
        </div>
      ))}
    </div>
  );
};

export default Lista;
