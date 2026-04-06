import Footer from "./features/Footer/Page/Footer"
import Header from "./features/Home/components/Header"
import Home from "./features/Home/pages/Home"

function App() {
  return (
    <div>      
      <Header />
      <div className="w-full lg:w-[85%] mx-auto">
        <Home />
      </div>
      <Footer />
    </div>
  )
}

export default App