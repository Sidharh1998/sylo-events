import { useState } from "react";
import { event_list } from "../assets/data"   //list of events


const OccasionTypes = ({setEvent, event}) => {
  const [clickedEvent, setClickedEvent] = useState('');    //state for getting event name

  const handleOccationClick = (evnt) => {    //function to set event selected
    if (event === evnt) {
      setEvent('');      //when same event is clicked
    } else {
      setEvent(evnt);   
      setClickedEvent(evnt)     
    }
  }

  return (
    <div className="py-4">
      <div className="font-bold text-xl">Dinesh, What's your occasion?</div>
            
      <div className="flex flex-wrap gap-4 pt-6 justify-center">      
        {event_list.map((events) => 
       (
        <div onClick={() => handleOccationClick(events.name)} key={events.id} 
        className={`w-24 md:w-32  flex flex-col cursor-pointer
         ${event !== '' ? (events.name === clickedEvent ? 'border-[1px] border-fuchsia-300 rounded-xl' : '') : ''}`}>
         
          {/* image amd name of occasions */}
          <img className="h-24 md:h-32 rounded-xl" alt="occasion" src={events.image}/>
        <div className="text-center font-semibold text-sm">{events.name}</div>
      
        </div>  
       )
       )}
      </div>
      

    </div>
  )
}

export default OccasionTypes
