import { venue_list } from "../assets/data"   //list 0f venues
import {BiFoodTag} from 'react-icons/bi' 
const PopularCategory = () => {
  return (
    <div className="pt-6">
    <div className="text-center text-2xl font-extrabold">* Most Popular venues *</div>
    <div className="flex pt-4 gap-6 overflow-x-auto no-scrollbar  transition delay-1000"> {/* Add 'overflow-x-auto' for horizontal scrolling */}
      {/* filtering requried  venue*/}
      {venue_list
        .filter((venue) => venue.category === 'most-popular')
        .map((venue) => (
          <div key={venue.id} className="text-base md:text-lg cursor-pointer">
            <div className="w-40 md:w-56 ">
              {/* venue image */}
              <img className="rounded-xl" src={venue.image} alt="venue"/>
            </div>
            <div className="font-bold  md:text-xl">{venue.name}</div>
            <div className="text-gray-500">HSR Layout ∙ 4.2km</div>
            <div className="text-gray-500">8 Packages Available</div>
            <div className="flex gap-1 items-center">
              <div className="bg-green-600 w-12 rounded-xl text-white text-center">★4.5 </div>
              <div className="text-gray-500"> ∙ ₹₹ ∙</div>
              <div className="text-lime-600 md:text-xl" ><BiFoodTag/></div>
              <div className="text-red-900 md:text-xl"><BiFoodTag/></div>

            </div>
          </div>
        ))}
    </div>
  </div>
  )
}

export default PopularCategory
