import Image from "next/image"
import Link from "next/link"

const Navbar = () => {

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 px-6 py-4">

  <div className="flex items-center justify-between max-w-7xl mx-auto max-[800px]:flex-col max-[800px]:gap-4">

    {/* LEFT SECTION */}
    <div className="flex items-center gap-3">
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfOTbSSEiEXBDYndLMpKOO0EQFZGYDChWE0w&s"
        alt="logo"
        width={50}
        height={50}
        className="rounded-xl border border-gray-200 shadow-sm"
      />

      <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
        <Link href="/" className="hover:opacity-80 transition">
          CartNova
        </Link>
      </h1>
    </div>

    {/* NAV LINKS */}
    <ul className="flex items-center gap-8 text-[15px] font-medium text-gray-600 max-[800px]:flex-wrap max-[700px]:justify-center">

      <Link href="/" className="hover:text-indigo-600 transition duration-200">
        Home
      </Link>

      <Link href="/products" className="hover:text-indigo-600 transition duration-200">
        Products
      </Link>

      <Link href="/about" className="hover:text-indigo-600 transition duration-200">
        About
      </Link>

      <Link href="/contact" className="hover:text-indigo-600 transition duration-200">
        Contact
      </Link>
    </ul>

    {/* RIGHT SECTION */}
    <div className="flex items-center gap-3">
      {/* CTA BUTTON */}
      <Link href="/cart">
        <button className="bg-indigo-500 text-white px-5 py-2 rounded-xl font-medium shadow-sm hover:bg-indigo-600 hover:shadow-md transition duration-300">
          View Cart
        </button>
      </Link>
    </div>

  </div>
</nav>
  )
}

export default Navbar
