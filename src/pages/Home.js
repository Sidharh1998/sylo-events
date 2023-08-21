import SearchBar from "../components/SearchBar"
import CarouselOffer from "../components/CarouselOffer"
import OccasionTypes from "../components/OccasionTypes"
import PopularCategory from "../components/PopularCategory"
import SyloSelect from "../components/SyloSelect"
import CustonerReview from "../components/CustonerReview"
import BudgetCategory from "../components/BudgetCategory"
import { useState } from "react"

const Home = () => {
  const [event, setEvent] = useState('');
  return (
    <div className=" p-5">
      <SearchBar/>
      <CarouselOffer/>
      <OccasionTypes setEvent={setEvent} event={event}/>
      <PopularCategory event={event}/>
      <SyloSelect/>
      <CustonerReview/>
      <BudgetCategory/>
    </div>
  )
}

export default Home
