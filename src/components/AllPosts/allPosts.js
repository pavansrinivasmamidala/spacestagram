import { useEffect, useState } from "react";
import { getImages } from "../../api/fetchData";
import greenPlanet from "../../assets/green-planet.png";
import Post from "../Post/post";
import Loading from "../../helpers/loading";
import purplePlanet from "../../assets/purple-planet.png";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getImages().then((response) => {
      setPosts(response);
      setLoading(false);
    }); // fetching images and its data
  }, []);

  const handleClick = () => {
    getImages().then(
      (response) => setPosts((posts) => [...posts, ...response]) // appending new data to the previous posts when load more is clicked
    );
  };

  return loading ? (
    <Loading />
  ) : (
    <div className="flex justify-center flex-col items-center  text-slate-200 bg-black shadow-slate-100 shadow-xl  pb-40 overflow-hidden pt-10">
      <div className="flex justify-center flex-col items-center ">
        {posts.map((item, idx) => {
          return <Post props={item} key={idx} />; // iterate through every post
        })}
      </div>

      <div className="absolute right-[-15vh] animate-wiggleLeftAndRight opacity-75 ">
        <img className="h-[50vh]" src={greenPlanet} alt="green planet" />
      </div>

      <div className="flex justify-between items-center">
        <div className="">
        <img
        className=" z-1 left-0 absolute  md:h-[45vh] 2xl:h-[40vh] xl:h-[55vh] lg:h-[50vh]  animate-wiggleLeftAndRight  rounded-full "
        src={purplePlanet}
        alt="purple planet"
      />
        </div>
      <div>
      <button
          className="border-none z-10 shadow-md hover:shadow-xl max-h-20 p-6 mb-10 mt-10 bg-blue-800 text-2xl  rounded-xl hover:text-white  font-bold hover:-translate-y-2 transition-all ease-in-out duration-300"
          onClick={handleClick}
        >
          Load More
        </button>
      </div>
       
        <div>
          {" "}
        </div>
      </div>
    </div>
  );
}

export default AllPosts;
