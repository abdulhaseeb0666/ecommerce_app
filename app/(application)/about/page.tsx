import Image from "next/image"
import type { Metadata } from "next";
import Link from "next/link";

export const metadata : Metadata = {
  title: "About Us",
  description: "About Us Page for CartNova",
}


const page = () => {
  return (
    <div className="bg-[#F8FAFC] py-16 px-6">

  <div className="max-w-6xl mx-auto flex flex-col gap-20">

    {/* HERO */}
    <div className="text-center max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
        Redefining Online Shopping
      </h1>
      <p className="text-gray-500 mt-4 text-lg">
        At CartNova, we blend technology, design, and trust to create a seamless shopping experience built for modern users.
      </p>
    </div>

    {/* MISSION */}
    <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-10">

      <div className="flex-1">
        <h2 className="text-2xl font-semibold text-gray-900">
          Our Mission
        </h2>
        <p className="text-gray-500 mt-3 leading-relaxed">
          Our mission is simple: make online shopping effortless and reliable. 
          We focus on delivering high-quality products, transparent pricing, 
          and a smooth user experience from browsing to checkout.
        </p>
      </div>

      <div className="flex-1 flex justify-center">
        <Image
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
          alt="mission"
          width={300}
          height={300}
          className="rounded-2xl w-auto h-auto object-cover shadow-sm"
        />
      </div>

    </div>

    {/* WHAT MAKES US DIFFERENT */}
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-900">
        What Makes Us Different
      </h2>

      <div className="grid grid-cols-3 gap-8 mt-10 
                      max-[900px]:grid-cols-2 
                      max-[600px]:grid-cols-1">

        {[
          {
            title: "Curated Quality",
            desc: "Every product is carefully selected to meet high standards."
          },
          {
            title: "Seamless Experience",
            desc: "Fast, responsive, and easy-to-use interface."
          },
          {
            title: "Secure Checkout",
            desc: "Safe payments with full data protection."
          },
          {
            title: "Fast Delivery",
            desc: "Quick and reliable shipping across regions."
          },
          {
            title: "Customer First",
            desc: "Support that actually listens and responds."
          },
          {
            title: "Modern Design",
            desc: "Built with a clean and premium UI experience."
          }
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              {item.title}
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              {item.desc}
            </p>
          </div>
        ))}

      </div>
    </div>

    {/* STORY */}
    <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 text-center max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-900">
        Our Story
      </h2>
      <p className="text-gray-500 mt-4 leading-relaxed">
        CartNova started with a simple idea — online shopping should feel smooth, 
        trustworthy, and enjoyable. We built this platform to eliminate common 
        frustrations and replace them with clarity, speed, and reliability. 
        Every update we make is driven by user experience and real-world feedback.
      </p>
    </div>

    {/* CTA */}
    <div className="text-center">
      <h2 className="text-2xl font-semibold text-gray-900">
        Ready to explore?
      </h2>

      <Link href="/products">
        <button className="mt-5 bg-indigo-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-600 transition shadow-sm hover:shadow-md">
          Start Shopping →
        </button>
      </Link>
    </div>

  </div>

</div>
  )
}

export default page
