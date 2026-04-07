"use client";

import { useRouter } from "next/navigation";
import type { Product } from "../(application)/products/page";

type Query = {
    id : number,
    title : string,
    description : string,
    price : number,
    image : string
}

const AddToCart = ({params} : {params : {product : Product} }) => {
    const product = params.product;
    const router = useRouter();
    console.log(product.images[0])
    const query : Query = {id : product.id, title : product.title, description : product.description, price : product.price , image : product.images[0]};

    const querystring = new URLSearchParams({
        id: query.id.toString(),
        title: query.title,
        description: query.description,
        price: query.price.toString(),
        image: query.image
    }).toString();
    
     const addtocart = () => {
        router.push(`/cart/?${querystring}`);
    }

  return (
    <div className="my-4">
  <button
    type="button"
    onClick={() => addtocart()}
    className="bg-orange-500 text-white font-semibold px-6 py-3 
               rounded-2xl shadow-md hover:bg-orange-600 
               hover:shadow-lg transition-transform transform hover:scale-105"
  >
    Add to Cart
  </button>
</div>
  )
}

export default AddToCart
