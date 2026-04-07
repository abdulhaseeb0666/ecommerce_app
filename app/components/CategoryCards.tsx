import Link from "next/link";

interface CategoryCardProps {
  params: {
    slug: string;
    description: string;
    index: number;
  };
}

const CategoryCards = ({ params }: CategoryCardProps) => {
  const { slug, description } = params;

  return (
    <div
      className="bg-white rounded-3xl p-6 flex flex-col justify-between
                 border border-gray-100 shadow-md hover:shadow-xl
                 hover:-translate-y-1 transition-transform duration-300"
    >
      {/* Category Title */}
      <h2 className="font-extrabold text-2xl text-blue-800 tracking-tight mb-2">
        {slug.charAt(0).toUpperCase() + slug.slice(1)}
      </h2>

      {/* Category Description */}
      <p className="text-gray-600 text-sm flex-1 leading-relaxed mb-4">
        {description.length > 100 ? description.slice(0, 100) + "..." : description}
      </p>

      {/* Explore Button */}
      <Link href={`/products/categories/${slug}`}>
        <button
          className="mt-auto w-full bg-orange-500 text-white font-semibold py-2 rounded-2xl
                     hover:bg-orange-600 hover:scale-105 transition-transform duration-300 shadow-sm"
        >
          Explore Now
        </button>
      </Link>
    </div>
  );
};

export default CategoryCards;