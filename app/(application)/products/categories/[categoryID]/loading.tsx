const Loading = () => {
  return (
    <div>

      {/* Categories Placeholder */}
      <div className="flex flex-wrap justify-center gap-3 p-4 border-b border-gray-300">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-8 w-28 bg-gray-300 rounded"
          ></div>
        ))}
      </div>

      {/* Products Grid Placeholder */}
      <div className="flex flex-wrap justify-around gap-y-10 p-3 max-[900px]:gap-y-8 max-[700px]:gap-y-6 max-[500px]:gap-y-4 max-[200px]:gap-y-2">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="w-55 border rounded-lg p-3 flex flex-col gap-3"
          >
            {/* Product Image */}
            <div className="h-37.5 bg-gray-300 rounded"></div>

            {/* Title */}
            <div className="h-5 bg-gray-300 rounded w-3/4"></div>

            {/* Price */}
            <div className="h-4 bg-gray-300 rounded w-1/3"></div>

            {/* Button */}
            <div className="h-8 bg-gray-400 rounded w-full"></div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Loading;