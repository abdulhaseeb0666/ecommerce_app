"use client";

import { useSearchParams } from "next/navigation";
import {  useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type CartItem = {
  id: string | null;
  name: string | null;
  description: string | null;
  price: number;
  quantity: number;
  image: string;
};

const CartClient = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const id = searchParams.get("id");
  const name = searchParams.get("title");
  const description = searchParams.get("description");
  const price = searchParams.get("price");
  const quantity = Number(searchParams.get("quantity")) || 1;
  const image = searchParams.get("image");
  
  const [cart, setCart] = useState<CartItem[]>([]);
  
  function removeItem(e : string | null) {
    const updatedCart = cart.filter(p => p.id !== e);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  }

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
  if (id || name || description || price) {

    const storedCart = localStorage.getItem("cart");
    const currentCart: CartItem[] = storedCart ? JSON.parse(storedCart) : [];

    const newItem: CartItem = {
      id,
      name,
      description,
      price: Number(price),
      quantity: Number(quantity),
      image: image ?? "",
    };

    const existing = currentCart.find(p => p.id === id);
    console.log(existing);


    let updatedCart;

    if (existing) {
      updatedCart = currentCart.map(p =>
        p.id === id
          ? { ...p, quantity: p.quantity + 1 }
          : p
      );
    } else {
      updatedCart = [...currentCart, newItem];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCart(updatedCart);

    router.replace("/cart");
  }
}, [id, name, description, price, quantity, image, router]);
  
  return (
    <div className="p-5 max-[500px]:p-3 max-[200px]:p-2 min-h-screen">
  <h1 className="text-3xl font-extrabold mb-6 text-blue-900 text-center max-[700px]:text-2xl max-[500px]:text-xl">
    Your Cart
  </h1>

  {cart.length === 0 ? (
    <p className="text-center text-gray-700 text-lg">No items in cart</p>
  ) : (
    <div className="flex flex-col gap-4">
      {cart.map((item, index) => (
        <div 
          key={index} 
          className="bg-white border border-blue-200 shadow-lg rounded-2xl p-4 flex justify-between items-center max-[700px]:flex-col max-[700px]:gap-4 hover:shadow-2xl transition"
        >
          <div className="flex gap-4 w-full max-[500px]:flex-col">
            <Image 
              src={item.image} 
              width={100} 
              height={100} 
              alt="product-image" 
              className="w-28 h-28 object-cover rounded-xl border-2 border-orange-400 shadow-sm max-[500px]:w-full max-[500px]:h-40"
            />
            <div className="flex flex-col justify-between gap-2 w-full">
              <Link href={`/products/${item.id}`}>
                <h2 className="font-bold text-xl text-blue-800 max-[700px]:text-lg max-[500px]:text-base">
                  {item.name}
                </h2>
              </Link>
              <p className="text-gray-700 max-[500px]:text-sm">{item.description}</p>
              <p className="text-gray-800 max-[500px]:text-sm"><b>Quantity:</b> {item.quantity}</p>
              <p className="text-gray-800 max-[500px]:text-sm"><b>Price:</b> ${item.price.toFixed(0)}</p>
            </div>
          </div>

          <button 
            id={String(index)} 
            onClick={() => removeItem(item.id)}
            className="bg-orange-500 text-white font-bold px-4 py-2 rounded-xl border border-orange-600 hover:bg-orange-600 hover:scale-105 transition transform max-[500px]:w-full max-[500px]:text-sm"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  )}

  {/* Total Section */}
  {cart.length > 0 && (
    <div className="bg-white border border-blue-200 shadow-lg rounded-2xl p-6 mt-6 w-full max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">Order Summary</h2>
      <div className="flex flex-col gap-2 border-b border-gray-300 pb-4">
        {cart.map((item, index) => (
          <div key={index} className="flex justify-between text-gray-800 font-semibold">
            <p>{item.name}</p>
            <p>
              ${item.price.toFixed(0)} x {item.quantity} = ${Number(item.price.toFixed(0)) * item.quantity}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-between font-bold text-xl mt-4 text-blue-900">
        <h3>Total:</h3>
        <h3>${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(0)}</h3>
      </div>

      <button 
        type="button"
        onClick={() => {
          router.push(`/checkout/?cart=${JSON.stringify(cart)}`);
          router.refresh();
          localStorage.removeItem("cart");
        }}
        className="bg-orange-500 text-white font-bold w-full mt-5 px-4 py-3 rounded-xl hover:bg-orange-600 hover:scale-105 transition transform shadow-lg"
      >
        Checkout
      </button>
    </div>
  )}
</div>
  );
};

export default CartClient;