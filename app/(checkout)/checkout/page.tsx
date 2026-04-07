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
    <div className="absolute h-fit w-fit max-w-[90%] rounded-3xl bg-linear-to-b from-gray-900 to-gray-800 border-2 border-white p-6 top-[50%] left-[50%] translate-[-50%] text-white shadow-2xl">
  
  {/* Title */}
  <h1 className="font-extrabold text-2xl text-center text-orange-400 mb-4 tracking-wide">
    Checkout
  </h1>

  {/* Cart Items */}
  <div className="flex flex-col gap-3 max-h-72 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-gray-700">
    {cart.map((item: CartItem, index: number) => (
      <div key={index} className="flex justify-between text-lg font-semibold bg-gray-800 rounded-xl px-3 py-2 hover:bg-gray-700 transition">
        <p className="truncate max-w-[45%]">{item.name}</p>
        <p className="text-orange-400">
          ${item.price.toFixed(0)} × {item.quantity} <span className="text-gray-400 font-normal">=</span> ${Number(item.price.toFixed(0)) * item.quantity}
        </p>
      </div>
    ))}
  </div>

  {/* Total */}
  <div className="font-bold mt-5 border-t-2 border-gray-500 text-xl flex justify-between pt-3 text-orange-300">
    <h1>Total:</h1>
    <h1>${cart.reduce((acc: number, item: CartItem) => acc + item.price * item.quantity, 0).toFixed(0)}</h1>
  </div>

  {/* Message */}
  <h1 className="text-center mt-4 text-gray-300 text-sm">
    Thank you for your purchase! Your order will be processed soon.
  </h1>

  {/* Button */}
  <button className="bg-orange-500 hover:bg-white hover:text-orange-500 text-white font-bold px-4 py-2 rounded-2xl mt-5 flex items-center justify-center mx-auto transition transform active:scale-95 shadow-md">
    <Link href={"/"} replace>Go to Home</Link>
  </button>
</div>
  )
}

export default Page
