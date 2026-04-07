const Loading = () => {
  return (
    <div className="p-5">

      {/* Title Placeholder */}
      <div className="h-8 w-32 bg-gray-300 rounded mb-5"></div>

      {/* Cart Items Placeholder */}
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="border-2 border-gray-800 rounded-2xl p-3 mb-3 flex gap-3"
        >
          {/* Image Placeholder */}
          <div className="w-20 h-[20 bg-gray-300 rounded-2xl border-2 border-orange-500"></div>

          {/* Text Section */}
          <div className="flex flex-col gap-2 w-full">
            <div className="h-6 w-48 bg-gray-300 rounded"></div>
            <div className="h-4 w-72 bg-gray-200 rounded"></div>
            <div className="h-4 w-32 bg-gray-200 rounded"></div>
            <div className="h-4 w-28 bg-gray-200 rounded"></div>
          </div>
        </div>
      ))}

    </div>
  );
};

export default Loading;