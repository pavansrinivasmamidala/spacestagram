import { useEffect, useState } from "react";
import { getImages } from "../../api/fetchData";
import earth from "../../assets/earth.png";
import Post from "../Post/post";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getImages().then((response) => setPosts(response)); // fetching images and its data
    console.log(posts);
  }, []);

  const handleClick = () => {
    getImages().then(
      (response) => setPosts((posts) => [...posts, ...response]) // appending new data to the previous posts when load more is clicked
    );
  }; //bg-gradient-to-r from-slate-200 to-indigo-100

  return (
    <div className="flex justify-center flex-col items-center dark:text-slate-200 dark:bg-black dark:shadow-slate-100 dark:shadow-xl  pb-40">
      
      <div className="flex justify-center flex-col items-center z-10">
        {posts.map((item, idx) => {
          if (idx < 10) return <Post props={item} key={idx} />; // iterate through every post
        })}
      </div>
      {/* <div className="flex justify-center flex-col items-center ">
        {posts.map((item, idx) => {
          if(idx >= 10 && idx < 20)
         return <Post props={item} key={idx} />  // iterate through every post
        })}
      </div>
      <div className="flex justify-center flex-col items-center ">
        {posts.map((item, idx) => {
          if(idx >= 20)
         return <Post props={item} key={idx} />  // iterate through every post
        })}
      </div> */}

      {/* <div>
        <button
          className="border-none shadow-md hover:shadow-xl bg-slate-400 hover:bg-slate-500 p-6 mb-10 mt-10 text-2xl rounded-xl hover:text-white  font-bold hover:-translate-y-2 transition-all ease-in-out duration-300"
          onClick={handleClick}
        >
          Load More
        </button>
      </div> */}
    </div>
  );
}

export default AllPosts;
