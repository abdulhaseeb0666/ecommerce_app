import Link from "next/link"
import Advertisement from "./Advertisement"

const SaleCard = () => {
  return (
    <div className="my-10 mx-5 rounded-3xl overflow-hidden bg-linear-to-br from-indigo-600 via-indigo-400 to-indigo-200 border border-gray-100 shadow-sm flex items-center max-[900px]:flex-col">

  {/* LEFT */}
  <div className="w-1/2 px-12 py-12 flex flex-col justify-center max-[900px]:w-full max-[700px]:text-center max-[700px]:items-center">

    <p className="text-gray-200 text-sm uppercase tracking-wide">
      Limited Time Offer
    </p>

    <h1 className="text-white font-extrabold text-5xl mt-2">
      15% OFF
    </h1>

    <h2 className="text-gray-200 font-medium text-xl mt-3">
      Ready to Gift Others 🎁
    </h2>

    <Link
      href="/products"
      className="mt-6 inline-block bg-indigo-600 text-white 
                px-6 py-3 rounded-xl text-sm font-medium 
                hover:scale-105 transition shadow-md hover:shadow-md"
    >
      Shop Now →
    </Link>
  </div>

  {/* RIGHT */}
  <div className="w-1/2 flex justify-center items-center p-8 max-[900px]:w-full">
    <Advertisement />
  </div>

</div>
  )
}

export default SaleCard
