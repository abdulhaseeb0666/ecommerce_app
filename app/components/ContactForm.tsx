"use client";

const ContactForm = () => {
    return (
        <form className="h-fit p-6 rounded-3xl border border-blue-200 flex flex-col gap-4 shadow-lg max-w-3xl mx-auto">

  <h1 className="text-blue-900 font-extrabold text-xl text-center">
    Fill out the form and a member from our sales team will reach out to you as soon as possible
  </h1>

  {/* Name Fields */}
  <div className="flex gap-4 max-[700px]:flex-col">
    <div className="flex flex-col w-full">
      <label htmlFor="firstname" className="font-semibold text-blue-800 mb-1">First Name</label>
      <input
        type="text"
        name="firstname"
        placeholder="Enter First Name"
        className="w-full border-2 border-blue-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
      />
    </div>

    <div className="flex flex-col w-full">
      <label htmlFor="lastname" className="font-semibold text-blue-800 mb-1">Last Name</label>
      <input
        type="text"
        name="lastname"
        placeholder="Enter Last Name"
        className="w-full border-2 border-blue-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
      />
    </div>
  </div>

  {/* Email */}
  <div className="flex flex-col w-full">
    <label htmlFor="email" className="font-semibold text-blue-800 mb-1">Email</label>
    <input
      type="email"
      name="email"
      placeholder="Enter Email"
      className="w-full border-2 border-blue-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
    />
  </div>

  {/* Phone */}
  <div className="flex flex-col w-full">
    <label htmlFor="phone" className="font-semibold text-blue-800 mb-1">Phone No</label>
    <input
      type="tel"
      name="phone"
      placeholder="Enter Phone No"
      className="w-full border-2 border-blue-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
    />
  </div>

  {/* Message */}
  <div className="flex flex-col w-full">
    <label htmlFor="message" className="font-semibold text-blue-800 mb-1">Message</label>
    <textarea
      name="message"
      placeholder="Enter Message"
      className="w-full border-2 border-blue-300 rounded-lg px-3 py-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
    ></textarea>
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="w-fit bg-orange-500 text-white font-bold text-lg px-6 py-2 rounded-xl place-self-center hover:bg-orange-600 hover:scale-105 transition transform shadow-md"
    onClick={(e) => e.preventDefault()}
  >
    Submit
  </button>
</form>
    )
}

export default ContactForm
