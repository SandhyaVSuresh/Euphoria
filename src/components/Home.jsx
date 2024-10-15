import BrandDeal from "./BrandDeal"
import Cards from "./Cards"
import CategoriesForMen from "./CategoriesForMen"
import CategoriesForwomen from "./CategoriesForwomen"
import FasionBetter from "./FasionBetter"
import Feedback from "./Feedback"
import Footer from "./include/Footer"
import Navbar from "./include/Navbar"
import Limelight from "./Limelight"
import NewArrival from "./NewArrival"
import Spotlight from "./Spotlight"

function Home() {
  return (
    <>
    <Navbar />
    <Spotlight />
    <Cards />
    <NewArrival />
    <FasionBetter />
    <CategoriesForMen />
    <CategoriesForwomen />
    <BrandDeal />
    <Limelight />
    <Feedback />
    <Footer />
    </>
  )
}

export default Home