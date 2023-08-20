import { venue_list } from "../assets/data"  //venue list
import {BiFoodTag} from 'react-icons/bi' 

const BudgetCategory = () => {
  return (
    <div className="pt-6 pb-16">
      
      <div className="font-bold text-xl">Venues on a Budget!</div>
      <div className="py-4 flex flex-wrap gap-6 justify-between">

      {venue_list
        .filter((venue) => venue.category === 'budget')
        .map((venue) => (
          <div key={venue.id} className="text-base  flex  gap-4 w-full md:w-96 rounded-2xl bg-gradient-to-r from-violet-100 via-white to-violet-100  pl-2" >
            <div className="w-40 ">
              {/* venue image */}
              <div className="relative">
              <img className=" rounded-xl" src={venue.image} alt={`Image of ${venue.name}`} />
              <div  className='absolute  text-white p-1 rounded-lg bottom-[-4px] right-10  text-[10px] md:text-xs md:px-2 font-thin bg-gradient-to-r from-fuchsia-900 to-red-500 '>Get This package</div>
            </div>
            </div>
            <div>
            <div className="font-bold ">{venue.name}</div>
            <div className="flex gap-1 items-center">
              <div className="bg-green-600 w-12 rounded-xl text-white text-center">★4.5 </div>
              <div className="text-gray-500"> ∙ ₹₹ ∙</div>
              <div className="text-lime-600 " ><BiFoodTag/></div>
              <div className="text-red-900 "><BiFoodTag/></div>
             </div>
            <div className="text-gray-500">HSR Layout ∙ 4.2km</div>
            <div className="text-gray-500">8 Packages Available</div>
           
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BudgetCategory
