import AllPosts from "./components/AllPosts/allPosts";
import { Suspense } from "react/cjs/react.production.min";
import Loading from "./helpers/loading";

function App() {
  return (
    <Suspense fallback={<Loading />}>
     
      <AllPosts />
    </Suspense>
  );
}

export default App;
