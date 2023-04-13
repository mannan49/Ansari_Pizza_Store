import SingleProduct from "../Components/SingleProduct";
import { useState, useEffect } from "react";

function Products() {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    fetch("https://star-spark-pasta.glitch.me/api/products")
    .then(response => response.json())
    .then(products =>{
      setProducts(products)
    })
  }, [])
  return (
    <div className="container mx-auto pb-24 minHeight">
      <h1 className="text-lg font-bold my-8">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-5 my-8 gap-24">
        {
          products.map(product => <SingleProduct key={product._id} product={product}/>)
        }
      </div>
    </div>
  );
}
export default Products;
