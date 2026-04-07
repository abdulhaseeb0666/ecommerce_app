import Image from "next/image"

const Advertisement = () => {
  return (
    <div className="w-full max-w-4xl mx-auto overflow-hidden rounded-3xl 
                shadow-xl bg-white border border-blue-100">

  <div className="flex animate-slider">
    {[
      "https://assets.stickpng.com/thumbs/5eb1560074bb7d0004ae61b3.png",
      "https://assets.stickpng.com/thumbs/5c62c1c7e4b8dd029ff25b18.png",
      "https://assets.stickpng.com/categories/4974.png",
      "https://assets.stickpng.com/categories/1466.png"
    ].map((src, i) => (
      <div key={i} className="min-w-full flex justify-center items-center p-6">
        
        <div className="bg-blue-50 rounded-2xl p-4 shadow-inner">
          <Image
            src={src}
            width={300}
            height={300}
            alt="Advertisement"
            className="h-50 object-contain 
                       max-[900px]:h-40 
                       max-[600px]:h-32.5"
          />
        </div>

      </div>
    ))}
  </div>
</div>
  )
}

export default Advertisement
