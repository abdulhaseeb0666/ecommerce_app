const Loading = () => {
  return (
    <div className="animate-pulse">

      {/* SaleCard Placeholder */}
      <div className="w-full h-75 bg-gray-300 rounded-lg m-5"></div>

      {/* Heading Placeholder */}
      <div className="flex justify-center m-5">
        <div className="h-10 w-72 bg-gray-300 rounded"></div>
      </div>

      {/* Category Cards Placeholder */}
      <div className="flex flex-wrap justify-around gap-y-3 p-3">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="w-55 h-37.5 bg-gray-200 rounded-lg"
          ></div>
        ))}
      </div>

    </div>
  );
};

export default Loading;