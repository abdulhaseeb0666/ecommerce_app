const Loading = () => {
  return (
    <div className="flex flex-col animate-pulse">
      
      {/* Product Section */}
      <div className="flex p-5 border-b-2 border-b-gray-300 m-3 gap-6">
        
        {/* Image Gallery Placeholder */}
        <div className="flex flex-col gap-3">
          <div className="w-100 h-100 bg-gray-300 rounded-lg"></div>

          <div className="flex gap-2">
            <div className="w-20 h-20 bg-gray-300 rounded"></div>
            <div className="w-20 h-20 bg-gray-300 rounded"></div>
            <div className="w-20 h-20 bg-gray-300 rounded"></div>
            <div className="w-20 h-20 bg-gray-300 rounded"></div>
          </div>
        </div>

        {/* Product Details Placeholder */}
        <div className="px-5 w-[60%] flex flex-col gap-4">
          <div className="h-10 w-3/4 bg-gray-300 rounded"></div>
          <div className="h-6 w-full bg-gray-300 rounded"></div>
          <div className="h-6 w-1/2 bg-gray-300 rounded"></div>

          <div className="h-8 w-32 bg-gray-300 rounded"></div>

          <div className="h-5 w-40 bg-gray-300 rounded"></div>
          <div className="h-5 w-48 bg-gray-300 rounded"></div>
          <div className="h-5 w-32 bg-gray-300 rounded"></div>
          <div className="h-5 w-36 bg-gray-300 rounded"></div>
          <div className="h-5 w-40 bg-gray-300 rounded"></div>

          <div className="h-12 w-40 bg-gray-400 rounded-lg mt-2"></div>
        </div>
      </div>

      {/* Reviews Placeholder */}
      <div className="p-5 flex flex-col gap-3">
        <div className="h-8 w-60 bg-gray-300 rounded"></div>

        <div className="h-20 w-full bg-gray-200 rounded"></div>
        <div className="h-20 w-full bg-gray-200 rounded"></div>
        <div className="h-20 w-full bg-gray-200 rounded"></div>
      </div>

      {/* Related Products Placeholder */}
      <div>
        <div className="h-10 w-64 bg-gray-300 rounded mx-auto my-4"></div>

        <div className="flex flex-wrap justify-around gap-4 p-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="w-50 h-65 bg-gray-200 rounded-lg"
            ></div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Loading;