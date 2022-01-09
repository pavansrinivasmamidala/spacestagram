import AllPosts from "./components/AllPosts/allPosts";
import { Suspense } from "react/cjs/react.production.min";
import Loading from "./helpers/loading";
import NavBar from "./components/NavBar/navBar";

function App() {
  return (
    <Suspense fallback={<Loading />}>
     <NavBar />
      <AllPosts />
    </Suspense>
  );
}

export default App;
