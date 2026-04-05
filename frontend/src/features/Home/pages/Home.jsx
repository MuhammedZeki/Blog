import Categories from "../components/Categories"
import Header from "../components/Header"
import Posts from "../components/Posts"
import SliderContent from "../components/SliderContent"

const Home = () => {
  return (
    <div>
        <Header />
        <SliderContent />
        <Categories />
        <Posts />
    </div>
  )
}

export default Home