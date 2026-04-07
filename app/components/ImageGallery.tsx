"use client";


import Image from "next/image";
import { useState } from "react";

export default function ProductClient({ params } : {params : {productImages : string[]}}) {

    const productImages = params.productImages;
  const [activeImage, setActiveImage] = useState(productImages[0]);

  return (
    <div className="w-full flex flex-col items-center gap-4">

  {/* Main Image */}
  <div className="bg-white rounded-3xl shadow-md border border-gray-200 p-4 w-full max-w-lg">
    <Image
      src={activeImage}
      width={400}
      height={400}
      alt="Product Image"
      className="w-full h-96 object-contain rounded-2xl"
    />
  </div>

  {/* Thumbnails */}
  <div className="flex gap-3 flex-wrap justify-center">
    {productImages.map((img, i) => (
      <div
        key={i}
        onClick={() => setActiveImage(img)}
        className={`p-1 rounded-xl border cursor-pointer transition ${
          activeImage === img
            ? "border-blue-500 ring-2 ring-blue-100"
            : "border-gray-200 hover:border-blue-400"
        }`}
      >
        <Image
          src={img}
          width={70}
          height={70}
          alt="thumbnail"
          className="w-20 h-20 object-contain rounded-lg bg-gray-50"
        />
      </div>
    ))}
  </div>

</div>
  );
}