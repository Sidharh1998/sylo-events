import { customers_reviews } from "../assets/data"


const CustonerReview = () => {
  return (
    <div className="pt-6">
      {/* header */}
      <div className="font-bold text-xl "> See what our
        <span className="bg-gradient-to-r from-fuchsia-900 to-red-500 bg-clip-text 
text-transparent"> customers </span>
        say! </div>
      {/* videos */}
      
      <div className="flex pt-4 gap-6 overflow-x-auto no-scrollbar   transition delay-1000">
        {customers_reviews.map((video) => (
          <div className="p-1 min-w-[200px] h-72  border-2 border-fuchsia-500 rounded-xl" key={video.id}>
            <iframe className="rounded-xl"
        title="YouTube Video"
        width="100%"
        height="100%"
        src= {video.video}
        frameborder="0"
        allowfullscreen
      ></iframe>
          </div>
        ))}

      </div>
    </div>
  )
}

export default CustonerReview
