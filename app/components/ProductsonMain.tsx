import React from 'react'
import type { Product } from "../(application)/products/page";
import ProductCard from './ProductCard';
import Link from 'next/link';
const ProductsonMain = async () => {

    const res = await fetch("https://dummyjson.com/products?sortBy=title&order=asc&sleep=2000&limit=100");
    const products = await res.json();
    const Products : Product[] = products.products;

  return (
    <section className="flex flex-col gap-10 py-12 px-6 bg-white rounded-3xl shadow-sm border border-gray-100">

  {/* HEADER */}
  <div className="text-center">
    <h1 className="font-bold text-3xl md:text-4xl text-gray-900">
      Featured Products
    </h1>
    <p className="text-gray-500 mt-2">
      Handpicked products just for you
    </p>
  </div>

  {/* PRODUCTS GRID */}
  <div className="grid grid-cols-4 gap-8 justify-items-center 
                  max-[1200px]:grid-cols-3 
                  max-[900px]:grid-cols-2 
                  max-[600px]:grid-cols-1">

    {Products.slice(0, 4).map((Product: Product, index: number) => (
      <ProductCard
        key={index}
        params={{ product: Product, index }}
      />
    ))}

  </div>

  {/* BUTTON */}
  <div className="flex justify-center">
    <Link href={"/products"}>
      <button className="bg-indigo-500 text-white font-medium px-6 py-3 rounded-xl shadow-sm hover:shadow-md hover:bg-indigo-600 transition duration-300">
        View All Products
      </button>
    </Link>
  </div>

</section>
  )
}

export default ProductsonMain
