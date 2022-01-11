import { useEffect, useState } from "react";
import { getImages } from "../../api/fetchData";
import greenPlanet from "../../assets/green-planet.png";
import Post from "../Post/post";
import Loading from "../../helpers/loading";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      getImages().then((response) => setPosts(response)); // fetching images and its data
    }, 1000);
    setLoading(false);
    console.log(posts);
  }, []);

  const handleClick = () => {
    getImages().then(
      (response) => setPosts((posts) => [...posts, ...response]) // appending new data to the previous posts when load more is clicked
    );
  }; //bg-gradient-to-r from-slate-200 to-indigo-100

  return loading ? (
    <Loading />
  ) : (
    <div className="flex justify-center flex-col items-center dark:text-slate-200 dark:bg-black dark:shadow-slate-100 dark:shadow-xl  pb-40 overflow-hidden pt-10">
      <div className="flex justify-center flex-col items-center z-10">
        {posts.map((item, idx) => {
          return <Post props={item} key={idx} />; // iterate through every post
        })}
      </div>

      <div className="absolute right-[-15vh] animate-wiggleLeftAndRight opacity-75 dark:block hidden ">
        <img className="h-[50vh]" src={greenPlanet} alt="" />
      </div>

      <div>
        <button
          className="border-none shadow-md hover:shadow-xl bg-slate-400 hover:bg-slate-500 p-6 mb-10 mt-10 dark:bg-blue-800 text-2xl rounded-xl hover:text-white  font-bold hover:-translate-y-2 transition-all ease-in-out duration-300"
          onClick={handleClick}
        >
          Load More
        </button>
      </div>
    </div>
  );
}

export default AllPosts;
