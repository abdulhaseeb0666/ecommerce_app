
import SaleCard from "../components/SaleCard";
import CategoriesonMain from "../components/CategoriesonMain";
import ProductsonMain from "../components/ProductsonMain";
import type { Metadata } from "next";


export const metadata : Metadata = {
  title: "Home",
  description: "Home Page for CartNova",
}

const Page = () => {

  return (
    <div className="md:px-8 space-y-16 bg-[#F8FAFC]" >

  <SaleCard />

  <CategoriesonMain />

  <ProductsonMain />

  {/* WHY CHOOSE US */}
  <div className="max-w-5xl mx-auto text-center">
    
    <h1 className="font-bold text-3xl md:text-4xl text-gray-900">
      Why Choose Us
    </h1>

    <p className="text-gray-500 mt-3">
      Designed to deliver a seamless and premium shopping experience.
    </p>

    <div className="mt-8 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-left">
      <ol className="list-disc pl-6 space-y-3 text-gray-600">
        <li><span className="font-semibold text-gray-800">User-Friendly Interface</span> – Clean and intuitive</li>
        <li><span className="font-semibold text-gray-800">Fast Performance</span> – Optimized for speed</li>
        <li><span className="font-semibold text-gray-800">Secure Transactions</span> – Your data is protected</li>
        <li><span className="font-semibold text-gray-800">Smart Shopping</span> – Easy discovery</li>
        <li><span className="font-semibold text-gray-800">Responsive Design</span> – Works everywhere</li>
      </ol>
    </div>

  </div>

</div>
  )
}

export default Page
