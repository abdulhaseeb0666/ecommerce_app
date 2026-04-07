import Link from "next/link";

const ProductCategories = async () => {

    const res = await fetch("https://dummyjson.com/products/category-list")
    const categories = await res.json()
    
    return (
    <div className="w-full bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-20 z-40">

  <ul
    className="flex items-center gap-3 px-6 py-4 
               overflow-x-auto scrollbar-hidden max-w-7xl mx-auto"
  >
    {categories.map((category: string, index: number) => (

      <li key={index} className="whitespace-nowrap">

        <Link
          href={`/products/categories/${category}`}
          className="px-4 py-2 rounded-full 
                     text-gray-600 text-sm font-medium
                     bg-gray-100 
                     hover:bg-indigo-500 hover:text-white
                     transition duration-300"
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </Link>

      </li>

    ))}
  </ul>

</div>
  )
}

export default ProductCategories
