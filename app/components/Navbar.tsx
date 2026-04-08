"use client";

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu , X } from "lucide-react";

const Navbar = () => {
  const [menu, setmenu] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 px-6 py-4">

      <div className="flex items-center justify-between max-w-7xl mx-auto max-[800px]:gap-4">

        {/* LEFT SECTION */}
        <div className="flex items-center justify-start gap-3">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUK3tbTFtn4EKRBdbA3IrN25LtWkh5qs1hhg&s"
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
        <ul className="hidden min-[800px]:flex items-center gap-8 text-[15px] font-bold text-gray-600 max-[800px]:flex-wrap max-[700px]:justify-center">

          <Link href="/" className="text-xl hover:text-indigo-600 transition duration-200">
            Home
          </Link>

          <Link href="/products" className="text-xl hover:text-indigo-600 transition duration-200">
            Products
          </Link>

          <Link href="/about" className="text-xl hover:text-indigo-600 transition duration-200">
            About
          </Link>

          <Link href="/contact" className="text-xl hover:text-indigo-600 transition duration-200">
            Contact
          </Link>
        </ul>

        {/* RIGHT SECTION */}
        <div className="hidden min-[800px]:flex items-center gap-3">
          {/* CTA BUTTON */}
          <Link href="/cart">
            <button className="bg-indigo-500 text-white px-5 py-2 rounded-xl font-medium shadow-sm hover:bg-indigo-600 hover:shadow-md transition duration-300">
              View Cart
            </button>
          </Link>
        </div>
          {
            menu && (
              <div className="fixed inset-0 z-50 backdrop-blur-md bg-white/40">
                {/* FULL WIDTH PANEL */}
                <div className="w-full relative h-full bg-white/90 flex flex-col ">

                  {/* TOP BAR */}
                  <div className="flex justify-between items-center p-5">
                    <h1 className="text-2xl font-extrabold bg-linear-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                      Menu
                    </h1>

                    <X
                      size={30}
                      className="cursor-pointer text-gray-700 hover:text-red-500 transition"
                      onClick={() => setmenu(false)}
                    />
                  </div>

                  {/* NAV LINKS */}
                  <div className="flex w-full relative border-b shadow-2xl p-2 flex-col gap-5">
                          <div className="bg-linear-to-br from-indigo-600/85 to-purple-600/85 absolute inset-0 -z-10" />
                    {[
                      { name: "Home", href: "/" },
                      { name: "Products", href: "/products" },
                      { name: "About", href: "/about" },
                      { name: "Contact", href: "/contact" },
                    ].map((item, i) => (
                      <Link key={i} href={item.href} onClick={() => setmenu(false)}>
                        <div className="flex items-center justify-between px-5 py-4 rounded-2xl bg-gray-50 hover:bg-indigo-50 transition shadow-sm hover:shadow-md">
                          
                          <span className="text-lg font-semibold text-gray-800 hover:text-indigo-600 transition">
                            {item.name}
                          </span>

                          <span className="text-gray-400">→</span>
                        </div>
                      </Link>
                    ))}

                    {/* CTA SECTION */}
                    <div className="mt-auto space-y-4">

                      <Link href="/cart" onClick={() => setmenu(false)}>
                        <button className="w-full bg-linear-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition">
                          🛒 View Cart
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          }


        {/* Menu Button */}
        <div className="min-[800px]:hidden">
          {
            !menu && (
              <Menu onClick={() => {setmenu(true)}} />
            ) 
          }
        </div>

      </div>
    </nav>
  )
}

export default Navbar
