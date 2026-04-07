import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '../(application)/products/page';

const ProductCard = async ({params} : {params : {product : Product , index : number }}) => {

  
    const product = (await params).product;
    const index = (await params).index;

  return (
    <div
  key={index}
  className="w-72 rounded-3xl overflow-hidden 
             bg-white border border-gray-100 
             shadow-sm hover:shadow-md 
             transition-all duration-300 
             hover:-translate-y-1 flex flex-col"
>

  {/* IMAGE */}
  <div className="bg-gray-50 flex justify-center items-center h-56 p-6 relative">

    <Image
      src={product.images[0]}
      alt="Product-image"
      width={200}
      height={150}
      className="object-contain h-full w-full transition duration-300 hover:scale-105"
      loading="eager"
    />
  </div>

  {/* CONTENT */}
  <div className="flex flex-col justify-between flex-1 p-5">

    {/* TITLE */}
    <h1 className="font-semibold text-base text-gray-900 line-clamp-2">
      {product.title}
    </h1>

    {/* PRICE */}
    <p className="text-indigo-600 font-semibold text-lg mt-1">
      ${product.price.toFixed(0)}
    </p>

    {/* DESCRIPTION */}
    <p className="text-sm text-gray-500 line-clamp-2 mt-2">
      {product.description}
    </p>

    {/* CATEGORY + STOCK */}
    <div className="flex justify-between items-center text-xs text-gray-500 mt-3">
      <span className="bg-gray-100 px-2 py-1 rounded-md">
        {product.category}
      </span>
      <span>
        Stock: <span className="text-gray-700 font-medium">{product.stock}</span>
      </span>
    </div>

    {/* BUTTON */}
    <Link href={`/products/${product.id}`}>
      <button
        className="mt-4 w-full bg-indigo-500 text-white 
                   py-2.5 rounded-xl font-medium 
                   hover:bg-indigo-600 
                   transition duration-300 shadow-sm hover:shadow-md"
      >
        View Details →
      </button>
    </Link>

  </div>
</div>
  )
}

export default ProductCard
