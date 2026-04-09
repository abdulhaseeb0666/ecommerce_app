"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation"

type CartItem = {
  name: string;
  price: number;
  quantity: number;
};

const Page = () => {
    const searchParams = useSearchParams();
    const cart: CartItem[] = JSON.parse(searchParams.get("cart") || "[]");
    console.log(cart)
  return (
    <div className="absolute w-[95%] sm:w-125 rounded-3xl 
bg-linear-to-br from-gray-900/90 to-gray-800/80 
backdrop-blur-xl border border-white/10 
p-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
text-white shadow-[0_20px_60px_rgba(0,0,0,0.6)]">

  {/* HEADER */}
  <div className="text-center mb-5">
    <h1 className="text-3xl font-extrabold bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
      Checkout
    </h1>
    <p className="text-sm text-gray-400 mt-1">
      Review your order before confirming
    </p>
  </div>

  {/* CART ITEMS */}
  <div className="flex flex-col gap-3 max-h-64 overflow-y-auto pr-2 
  scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-gray-700">

    {cart.map((item: CartItem, index: number) => (
      <div
        key={index}
        className="flex flex-col bg-white/5 backdrop-blur-md 
        border border-white/10 rounded-xl px-4 py-3 
        hover:bg-white/10 transition-all duration-300"
      >
        {/* Top Row */}
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg truncate max-w-[60%]">
            {item.name}
          </p>
          <span className="text-orange-400 font-bold">
            ${item.price.toFixed(0)}
          </span>
        </div>

        {/* Bottom Row */}
        <div className="flex justify-between text-sm text-gray-400 mt-1">
          <span>Qty: {item.quantity}</span>
          <span>
            Subtotal:{" "}
            <span className="text-white font-semibold">
              ${(item.price * item.quantity).toFixed(0)}
            </span>
          </span>
        </div>
      </div>
    ))}
  </div>

  {/* TOTAL SECTION */}
  <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center">
    <span className="text-lg text-gray-300">Total</span>
    <span className="text-2xl font-extrabold text-orange-400">
      ${cart.reduce((acc: number, item: CartItem) => acc + item.price * item.quantity, 0).toFixed(0)}
    </span>
  </div>

  {/* SUCCESS MESSAGE */}
  <div className="mt-4 text-center text-sm text-gray-400">
    🎉 Your order has been placed successfully!
  </div>

  {/* CTA BUTTON */}
  <Link href="/" replace>
    <button className="w-full mt-5 py-3 rounded-2xl 
    bg-linear-to-r from-orange-500 to-orange-600 
    hover:from-white hover:to-white hover:text-orange-500 
    font-bold transition-all duration-300 
    shadow-lg hover:shadow-orange-500/40 
    active:scale-95">
      Continue Shopping
    </button>
  </Link>
</div>
  )
}

export default Page
