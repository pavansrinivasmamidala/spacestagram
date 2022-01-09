import { useEffect, useState } from "react";
import { getImages } from "../../api/fetchData";
import Post from "../Post/post";
import { Suspense } from "react";
import Loading from "../../helpers/loading";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getImages().then((response) => setPosts(response));
    console.log(posts);
  }, []);

  const handleClick = () => {
    // getImages().then((response) =>
    //   setPosts((posts) => [...posts, ...response])
    // );
  };

  if (posts === []) {
    return <Loading />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <div className="flex justify-center flex-col items-center ">
        <Suspense fallback={<Loading />}>
        <div className="flex justify-center flex-col items-center w-full">
          {posts.map((item, idx) => {
            return <Post props={item} key={idx} />;
          })}
        </div>
        </Suspense>
        {/* <div>
          <button
            className="border-none shadow-md hover:shadow-lg bg-blue-500 p-6 mb-20 text-2xl rounded-xl text-white font-bold hover:-translate-y-2 transition-all ease-in-out duration-300"
            onClick={handleClick}
          >
            Load More
          </button>
        </div> */}
      </div>
    </Suspense>
  );
}

export default AllPosts;
