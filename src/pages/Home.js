import SearchBar from "../components/SearchBar"
import CarouselOffer from "../components/CarouselOffer"
import OccasionTypes from "../components/OccasionTypes"
import PopularCategory from "../components/PopularCategory"
import SyloSelect from "../components/SyloSelect"
import CustonerReview from "../components/CustonerReview"
import BudgetCategory from "../components/BudgetCategory"

const Home = () => {
  return (
    <div className=" p-5">
      <SearchBar/>
      <CarouselOffer/>
      <OccasionTypes/>
      <PopularCategory/>
      <SyloSelect/>
      <CustonerReview/>
      <BudgetCategory/>
    </div>
  )
}

export default Home
