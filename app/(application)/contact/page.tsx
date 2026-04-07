import ContactForm from "../../components/ContactForm";
import type { Metadata } from "next";

export const metadata : Metadata = {
  title: "Contact",
  description: "Contact Page for CartNova",
}


const page = () => {
  return (
    <div className="p-10">
  {/* Header */}
  <h1 className="font-extrabold text-4xl text-blue-900 text-center max-[700px]:text-3xl">
    Contact Us
  </h1>
  <p className="text-gray-700 text-center text-lg my-6 max-[700px]:text-base">
    Our dedicated team is here to provide swift assistance. Reach out for any questions, comments, or inquiries.
  </p>

  {/* Main Section */}
  <div className="flex justify-center items-start gap-10 max-[1000px]:flex-col max-[1000px]:gap-8">
    
    {/* Info Card */}
    <div className="w-[60%] max-[1000px]:w-full bg-white rounded-3xl p-8 shadow-xl border border-blue-200 flex flex-col gap-6">
      <h2 className="font-bold text-2xl text-blue-900">We are happy to hear from you and help you.</h2>
      <div className="flex flex-col gap-4 text-gray-700">
        <div className="bg-blue-100 p-4 rounded-xl shadow hover:shadow-md transition">
          <h3 className="font-semibold text-blue-800">Visit Us At</h3>
          <p>7428 Maple Ridge Drive, Apt 3B, Denver, CO 80219, United States</p>
        </div>
        <div className="bg-blue-100 p-4 rounded-xl shadow hover:shadow-md transition">
          <h3 className="font-semibold text-blue-800">Support & Sales</h3>
          <p>+92 3206608577</p>
        </div>
        <div className="bg-blue-100 p-4 rounded-xl shadow hover:shadow-md transition">
          <h3 className="font-semibold text-blue-800">Email</h3>
          <p>abdulhaseebah7886786@gmail.com</p>
        </div>
      </div>
    </div>

    {/* Contact Form Card */}
    <div className="w-[40%] max-[1000px]:w-full bg-white rounded-3xl shadow-xl border border-blue-200 flex flex-col gap-4">
      <ContactForm />
    </div>
  </div>

  {/* Map Section */}
  <div className="mt-10 rounded-3xl overflow-hidden shadow-lg">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1288.0735146601114!2d71.50120319405737!3d30.177893230033767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b370020d10117%3A0x45693c8dfb93beae!2sAbdullah%20Gujjar%20Drink%20Corner!5e0!3m2!1sen!2s!4v1773085884957!5m2!1sen!2s"
      loading="lazy"
      className="w-full h-96"
    ></iframe>
  </div>
</div>
  )
}

export default page
