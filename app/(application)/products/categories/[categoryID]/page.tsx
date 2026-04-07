import type { Product } from "../../page";
import ProductCard from "../../../../components/ProductCard";
import type { Metadata } from "next";

export const metadata : Metadata = {
  title: "Categories",
  description: "Categories from CartNova",
}


const page = async ({params} : {params : {categoryID : string}}) => {
    const categoryID = (await params).categoryID;

    const res = await fetch(`https://dummyjson.com/products/category/${categoryID}`);
    const data = await res.json();
    const products = data.products;
  return (
    <div className="bg-[#F8FAFC] min-h-screen py-16 px-6">

  {/* Page Header */}
  <div className="text-center max-w-3xl mx-auto mb-12">
    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
      Our Products
    </h1>
    <p className="text-gray-500 mt-3 text-lg">
      Explore our collection of products carefully curated for quality, style, and reliability.
    </p>
  </div>

  {/* Products Grid */}
  <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8
                  max-[1200px]:grid-cols-3
                  max-[900px]:grid-cols-2
                  max-[600px]:grid-cols-1">

    {products.map((product: Product, index: number) => (
      <ProductCard params={{ product, index }} key={index} />
    ))}

  </div>

</div>
  )
}

export default page
