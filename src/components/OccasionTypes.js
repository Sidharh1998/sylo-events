import { event_list } from "../assets/data"   //list of events


const OccasionTypes = () => {
  return (
    <div className="py-4">
      <div className="font-bold text-xl">Dinesh, What's your occasion?</div>
            
      <div className="flex flex-wrap gap-4 pt-6 justify-between">      
        {event_list.map((events) => 
       (
        <div className="w-24 md:w-32  flex flex-col ">
          {/* image amd name of occasions */}
          <img className="h-24 md:h-32 rounded-xl" src={events.image}/>
        <div className="text-center font-semibold text-sm">{events.name}</div>
      
        </div>  
       )
       )}
      </div>
      

    </div>
  )
}

export default OccasionTypes
