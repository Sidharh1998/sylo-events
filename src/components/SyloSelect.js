import {GoTriangleLeft} from 'react-icons/go'
import {GoTriangleRight} from 'react-icons/go'
import { event_list } from "../assets/data"   //list of events


const SyloSelect = () => {
  return (
    <div>
    <div className="pt-6">
      {/* header  */}
      <div className="flex justify-center items-center">
        <div class="bg-gradient-to-r from-fuchsia-900 to-fuchsia-600 w-full h-1"></div>
        <span className='text-2xl text-fuchsia-600 relative right-3'><GoTriangleLeft/></span>
        <div className="flex flex-col items-center w-full p-8 ">
          <div className="text-center  font-extrabold text-2xl min-w-[180px] bg-gradient-to-r from-fuchsia-900 to-red-500 bg-clip-text text-transparent">SYLO Select</div>
          <div className=" text-sm font-bold">Exclusive Celebration Plans</div>
        </div>
        <span className='text-2xl text-red-500 relative left-3'><GoTriangleRight/></span>
        <div class="bg-gradient-to-r from-red-500 to-red-400 w-full h-1"></div>
      </div>
      

      {/*sylo content  */}

      <div className='pt-6 grid  grid-cols-2 md:grid-cols-4  overflow-y-scroll no-scrollbar  w-auto h-72  gap-4 transition-all'>

         {event_list.map((events) => (
          <div key={events.id} className={`${events.bgColor} cursor-pointer relative shadow-lg rounded-2xl font-bold  text-xs md:text-lg md:min-w-30 h-28  flex justify-center items-center`}>
            <div >{events.name}</div>
            <div  className='absolute text-white p-1 rounded-lg bottom-0 text-[10px] md:text-xs md:px-2 font-thin bg-gradient-to-r from-fuchsia-900 to-red-500 '>Get This package</div>
          </div>
         ))}
      </div>
    </div>
    <div class="bg-gradient-to-r  from-fuchsia-900 to-red-500 w-full h-1 mt-6"></div>
     
    </div>
  )
}

export default SyloSelect
