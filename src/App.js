import AllPosts from "./components/AllPosts/allPosts";
import { Suspense } from "react";
import Loading from "./helpers/loading";
import NavBar from "./components/NavBar/navBar";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <NavBar />
      <AllPosts />
      <Footer />
    </Suspense>
  );
}

export default App;
