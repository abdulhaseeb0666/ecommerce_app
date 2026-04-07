import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-blue-700 to-blue-500 text-white py-12 px-6">

      {/* Top Section: Logo & About */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-8 lg:gap-16">
        
        {/* Logo & About */}
        <div className="flex flex-col gap-4 lg:w-1/3">
          <h1 className="text-2xl font-extrabold">CartNova</h1>
          <p className="text-gray-100 text-sm">
            CartNova delivers a seamless online shopping experience. Explore top products, enjoy secure checkout, and shop with confidence.
          </p>
          <div className="flex gap-4 mt-2">
            <Link href="https://abdulhaseeb0666.vercel.app" target="blank" className="hover:text-gray-200 transition">
                <h1>Portfolio</h1>
            </Link>
            <Link href="https://github.com/abdulhaseeb0666" target="blank" className="hover:text-gray-200 transition">              
                <h1>Github</h1>
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2 lg:w-1/5">
          <h2 className="font-bold text-lg mb-2">Quick Links</h2>
          <Link href="/" className="hover:text-gray-200 transition">Home</Link>
          <Link href="/products" className="hover:text-gray-200 transition">Products</Link>
          <Link href="/about" className="hover:text-gray-200 transition">About Us</Link>
          <Link href="/contact" className="hover:text-gray-200 transition">Contact</Link>
        </div>

        {/* Newsletter
        <div className="flex flex-col gap-2 lg:w-1/4">
          <h2 className="font-bold text-lg mb-2">Newsletter</h2>
          <p className="text-gray-100 text-sm">Subscribe to get updates on latest products and offers.</p>
          <div className="flex gap-2 mt-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 rounded-l-2xl border border-gray-200 text-gray-900 focus:outline-none"
            />
            <button className="bg-orange-500 px-4 py-2 rounded-r-2xl font-semibold hover:bg-orange-600 transition">
              Subscribe
            </button>
          </div>
        </div> */}

      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-white/20 pt-6 text-center text-gray-200 text-sm">
        &copy; {new Date().getFullYear()} CartNova | Abdul Haseeb. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;