import { useEffect, useState } from "react";
import { getImages } from "../../api/fetchData";
import Post from "../Post/post";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {  
    getImages().then((response) => setPosts(response)); // fetching images and its data
    console.log(posts);   
  }, []);

  const handleClick = () => {
    getImages().then((response) =>
      setPosts((posts) => [...posts, ...response]) // appending new data to the previous posts when load more is clicked
    );
  };

    return (
    <div className="flex justify-center flex-col items-center  ">   
      <div className="flex justify-center flex-col items-center ">
        {posts.map((item, idx) => {
          return <Post props={item} key={idx} />; // iterate through every post
        })}
      </div>

      <div>
        <button
          className="border-none shadow-md hover:shadow-xl bg-slate-400 hover:bg-slate-500 p-6 mb-10 mt-10 text-2xl rounded-xl hover:text-white  font-bold hover:-translate-y-2 transition-all ease-in-out duration-300"
          onClick={handleClick}
        >
          Load More
        </button>
      </div>
    </div>
  );
}

export default AllPosts;
