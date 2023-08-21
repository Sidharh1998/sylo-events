import {BiHomeAlt} from 'react-icons/bi'  //home icon
import {FiSearch} from 'react-icons/fi'  //search icon
import {AiOutlineMenu}  from 'react-icons/ai' //order icon
import {CgProfile}  from 'react-icons/cg' //profile icon



const BottomNavBar = () => {
  return (
    <div className="flex fixed bottom-0 w-screen border-t-2  border-gray-200 justify-around py-2 z-10 bg-white ">
      {/* home button*/}
      <div className="flex flex-col cursor-pointer text-fuchsia-900">   
        <div className='text-2xl flex justify-center'>
            <BiHomeAlt/>
        </div>
        <div className='text-xs'>sylo</div>
      </div>

       {/* search  button*/}
       <div className="flex flex-col cursor-pointer text-gray-400 ">   
        <div className='text-2xl  flex justify-center'>
            <FiSearch/>
        </div>
        <div className='text-xs '>Search</div>
      </div>

       {/* home button*/}
       <div className="flex flex-col cursor-pointer text-gray-400 ">   
        <div className='text-2xl flex justify-center'>
            <AiOutlineMenu/>
        </div>
        <div className='text-xs'>Order</div>
      </div>

       {/* home button*/}
       <div className="flex flex-col cursor-pointer text-gray-400 ">   
        <div className='text-2xl flex justify-center'>
            <CgProfile/>
        </div>
        <div className='text-xs'>Profile</div>
      </div>
    </div>
  )
}

export default BottomNavBar
