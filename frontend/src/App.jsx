import { Route, Routes } from "react-router-dom";
import Footer from "./features/Footer/Page/Footer";
import Header from "./features/Home/components/Header";
import Home from "./features/Home/pages/Home";
import Post from "./features/Post/page/Post";
import Posts from "./features/Post/page/Posts";

function App() {
  return (
    <div>
      <Header />
      <div className="w-full lg:w-[85%] mx-auto">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/AllPosts" element={<Posts />} />
          <Route path="/postDetails" element={<Post />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
