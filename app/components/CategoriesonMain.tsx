import React from 'react'
import Link from "next/link";
import CategoryCards from "../components/CategoryCards"
import { categories } from "../components/categoryList";

const CategoriesonMain = () => {
  return (
    <section className="flex flex-col gap-8 py-10 px-6 bg-white rounded-3xl shadow-sm border border-gray-100">

  {/* HEADER */}
  <div className="text-center">
    <h1 className="font-bold text-3xl md:text-4xl text-gray-900">
      Explore Categories
    </h1>
    <p className="text-gray-500 mt-2">
      Find products tailored to your needs
    </p>
  </div>

  {/* GRID */}
  <div className="grid grid-cols-4 gap-10 justify-items-center max-[1200px]:grid-cols-3 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
    {categories.slice(0, 4).map(({ slug, description }, index) => (
      <CategoryCards
        key={index}
        params={{ slug, description, index }}
      />
    ))}
  </div>

  {/* BUTTON */}
  <div className="flex justify-center">
    <Link href={"/products/categories"}>
      <button className="bg-gray-200 text-gray-800 font-medium px-6 py-3 rounded-xl hover:bg-gray-300 transition">
        View More
      </button>
    </Link>
  </div>

</section>
  )
}

export default CategoriesonMain
