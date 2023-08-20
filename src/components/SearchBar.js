import {AiOutlineSearch}  from 'react-icons/ai' 

const SearchBar = () => {
  return (
    <div className="flex justify-center relative">
      <input className=" w-full border-2 border-gray-300 p-2 pl-5 rounded-full outline-none" placeholder="Search for venues">
      
      </input>
      <span className='absolute right-6 top-3 text-2xl  text-fuchsia-900'><AiOutlineSearch/> </span>
    </div>
  )
}

export default SearchBar
