import ImageGallery from "@/app/components/ImageGallery";
import type { Product } from "../page";
import Link from "next/link";
import ProductReview from "@/app/components/ProductReview";
import ProductCard from "@/app/components/ProductCard";
import type { Metadata } from "next";
import AddToCart from "@/app/components/AddToCart";

export const metadata : Metadata = {
  title: "Product",
  description: "Product from CartNova",
}

const page = async ({params} : {params : {productID : string}}) => {
 
  const productID = (await params).productID;
  const res = await fetch(`https://dummyjson.com/products/${productID}`);
  const data = await res.json();
  const product : Product = data;

  const reviews  = product.reviews;
  const category = product.category;

  const res2 = await fetch(`https://dummyjson.com/products/category/${category}`);
  const data2 = await res2.json();
  const products = data2.products;

  const productImages = product.images;

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">

  {/* Product Info */}
  <div className="flex flex-col lg:flex-row gap-8 bg-white p-6 lg:p-10 rounded-3xl shadow-lg border border-gray-100">
    
    {/* Image Gallery */}
    <div className="lg:w-1/2 flex flex-col items-center">
      <ImageGallery params={{ productImages }} />
    </div>

    {/* Product Details */}
    <div className="lg:w-1/2 flex flex-col gap-5">
      <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900">{product.title}</h1>
      <p className="text-gray-700 text-lg lg:text-xl">{product.description}</p>
      <p className="text-3xl font-bold text-orange-600 mt-2">${product.price.toFixed(0)}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-3 mt-3">
        <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full font-medium text-sm">Stock: {product.stock}</span>
        <Link href={`/products/categories/${product.category}`}>
          <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full font-medium text-sm hover:bg-green-200 cursor-pointer">
            Category: {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </span>
        </Link>
        <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full font-medium text-sm">Rating: {product.rating}</span>
        <span className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full font-medium text-sm">Brand: {product.brand}</span>
        <span className="bg-red-100 text-red-700 px-4 py-1 rounded-full font-medium text-sm">Discount: {product.discountPercentage}%</span>
      </div>

      {/* Add To Cart */}
      <div className="mt-6">
        <AddToCart params={{ product }} />
      </div>
    </div>
  </div>

  {/* Product Reviews */}
  <ProductReview params={{ reviews }} />

  {/* Related Products */}
  <div className="my-10">
    <h2 className="text-3xl font-bold text-gray-900 text-center mb-6 border-t border-gray-200 pt-4">Related Products</h2>
    <div className="max-w-7xl mx-auto grid grid-cols-4 gap-6 max-[1200px]:grid-cols-3 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
      {products.map((product : Product, index : number) => (
        <ProductCard key={index} params={{ product, index }} />
      ))}
    </div>
  </div>

</div>
  )
}

export default page
