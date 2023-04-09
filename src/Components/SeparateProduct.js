import pizza from "../Assets/pizza.png";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
function SeparateProduct() {
    const [product, setProduct] = useState({})
    const params = useParams(); 
    const navigate = useNavigate();
    useEffect(()=>{
        fetch(`https://star-spark-pasta.glitch.me/api/products/${params._id}`)
        .then(response => response.json())
        .then(product => {
            setProduct(product)
        })
    },[params._id])

    return ( 
        <>
        <div className="container mx-auto mt-12">
            <button className="mb-12 font-bold" onClick={()=> {navigate('/')}}>Back</button>
            <div className="flex-column md:flex">
                <img src={product.image} className="mx-auto w-2/3 md:mx-0 md:w-1/4" alt="" srcset="" />
                <div  className="md:w-1/4 flex-column my-auto">
                    <h1 className="text-xl font-bold">{product.name}</h1>
                    <div className="text-md">{product.size}</div>
                    <div className="font-bold">Rs. {product.price}</div>
                    <button className="bg-yellow-500 py-1 px-5 rounded-full font-bold mt-4">Add to Cart</button>
                </div>
            </div>

        </div>
        </>
     );
}

export default SeparateProduct;