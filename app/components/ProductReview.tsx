type Review = {
    comment : string;
    date : string;
    rating : number;
    reviewerEmail : string;
    reviewerName : string;
}

const ProductReview = async ({params} : {params : {reviews : Review[]}}) => {
    const reviews = (await params).reviews
  return (
    <div className="my-6 mx-4">
  <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Customer Reviews</h1>

  <div className="grid grid-cols-2 gap-6 max-[900px]:grid-cols-1">
    {reviews.map(({ reviewerName, reviewerEmail, comment, rating, date }, index) => (
      <div key={index} className="bg-white p-5 rounded-3xl shadow-md border border-gray-100 hover:shadow-xl transition">
        
        <div className="flex justify-between items-center mb-3 border-b border-gray-100 pb-2">
          <h3 className="text-blue-700 font-bold">{reviewerName}</h3>
          <p className="text-gray-400 text-sm">{reviewerEmail}</p>
        </div>

        <p className="text-gray-700 mb-3">{comment}</p>

        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={`${i < rating ? "text-orange-500" : "text-gray-300"}`}>★</span>
          ))}
          <span className="text-gray-500 ml-2 text-sm">{rating}/5</span>
        </div>

        <p className="text-gray-400 text-xs text-right">{date.slice(0,10)}</p>

      </div>
    ))}
  </div>
</div>
  )
}

export default ProductReview
