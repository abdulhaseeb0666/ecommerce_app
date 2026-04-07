import ProductCategories from "../../components/ProductCategories";
import ProductCard from "../../components/ProductCard";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata : Metadata = {
  title: "Products",
  description: "Products Page for CartNova",
}


export type Product = {
  id: number;
  title: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  sku: string;
  tags: string[];
  availabilityStatus: string; // e.g., "In Stock"
  images: string[];
  thumbnail: string;
  minimumOrderQuantity: number;
  returnPolicy: string;
  shippingInformation: string;
  warrantyInformation: string;
  weight: number;

  dimensions: {
    width: number;
    height: number;
    depth: number;
  };

  meta: {
    createdAt: string; // ISO date
    updatedAt: string; // ISO date
    barcode: string;
    qrCode: string;
  };

  reviews: {
    comment : string;
    date : string;
    rating : number;
    reviewerEmail : string;
    reviewerName : string;
  }[];
};

const Page = async () => {

  const res = await fetch("https://dummyjson.com/products?sortBy=title&order=asc&sleep=2000&limit=100");
  const products = await res.json();
  const Products = products.products;
  
  return (
    <div className="bg-[#F8FAFC] min-h-screen py-5 relative">

  {/* CATEGORIES */}
  <ProductCategories />

  {/* PRODUCTS GRID */}
  <div className="max-w-7xl mx-auto px-6 mt-10">

    <div className="grid 
                    grid-cols-4 
                    gap-8 
                    max-[1200px]:grid-cols-3 
                    max-[900px]:grid-cols-2 
                    max-[600px]:grid-cols-1">

      {Products.map((product: Product, index: number) => (
        <Suspense
          key={index}
          fallback={
            <div className="w-72 h-96 bg-white rounded-3xl shadow-sm animate-pulse" />
          }
        >
          <ProductCard params={{ product, index }} />
        </Suspense>
      ))}

    </div>

  </div>

</div>
  )
}

export default Page
