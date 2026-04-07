import CategoryCards from "@/app/components/CategoryCards";
import { categories } from "@/app/components/categoryList";
import type { Metadata } from "next";

export const metadata : Metadata = {
  title: "Categories",
  description: "Categories Page for CartNova",
}


const page = () => {
  return (
    <div className="bg-[#F8FAFC] min-h-screen py-16 px-6">

  {/* Page Header */}
  <div className="text-center max-w-3xl mx-auto mb-12">
    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
      Explore Our Categories
    </h1>
    <p className="text-gray-500 mt-3 text-lg">
      Browse our curated categories and find products that fit your needs.
    </p>
  </div>

  {/* Categories Grid */}
  <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8
                  max-[1200px]:grid-cols-3
                  max-[900px]:grid-cols-2
                  max-[600px]:grid-cols-1">

    {categories.map(({ slug, description }, index) => (
      <CategoryCards key={index} params={{ slug, description, index }} />
    ))}

  </div>
</div>
  )
}

export default page
