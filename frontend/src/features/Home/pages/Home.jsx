import Categories from "../components/Categories"
import Posts from "../components/Posts"
import SliderContent from "../components/SliderContent"

const Home = () => {
  return (
    <div>
        <SliderContent />
        <Categories />
        <Posts />
    </div>
  )
}

export default Home