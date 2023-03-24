import React, { useEffect, useState } from "react";
import { add } from "../store/CartSlice";
import { useDispatch } from "react-redux";
const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const resp = await fetch("https://fakestoreapi.com/products");
      const data = await resp.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleAdd =(product)=>{
    dispatch(add(product));
  }
  return (
    <div className="productsWrapper">
      {products.map((product) => {
        return (
          <div className="card" key={product.id}>
            <img src={product.image} alt="" />
            <h4>{product.title}</h4>
            <h4>{product.price}</h4>
            <button onClick={()=> handleAdd(product)} className="btn">Add To Cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
