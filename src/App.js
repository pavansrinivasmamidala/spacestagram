import AllPosts from "./components/AllPosts/allPosts";
import { Suspense } from "react/cjs/react.production.min";
import Loading from "./helpers/loading";
import NavBar from "./components/NavBar/navBar";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <Suspense fallback={<Loading />}>
     <div className="dark ">
     <NavBar />
      <AllPosts />
      <Footer />
     </div>
      
    </Suspense>
  );
}

export default App;
