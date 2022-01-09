import likeIcon from "../../assets/like.png";
import heart from "../../assets/heart.png";
import { useState } from "react";

function Post({ props }) {
  const data = props;
  const [like, setLike] = useState(false);
  const [read, setRead] = useState(false);

  return (
    <div
      className="flex flex-col lg:w-1/3  shadow-lg hover:shadow-xl rounded-xl m-10 group  bg-slate-100  ease-in-out hover:bg-slate-200 cursor-pointer transition-all md:w-1/2 sm:w-4/5"
      onClick={() =>setLike(!like)}
    >
      <div className="p-5 items-center text-center justify-items-center ">
        <img
          src={data.hdurl}
          className="rounded-xl object-fill opacity-[0.92] group-hover:opacity-100  transition-all ease-in-out"
        />
      </div>
      <div className="p-5 pb-2 text-3xl font-semibold ">{data.title}</div>
      <div className="flex flex-col items-center p-5 break-normal ">
        <div
          className={
            "w-11/12 text-xl font-medium  transition-all duration-4000 ease-in-out line-clamp-2" 
            // (read ? "line-clamp-none" : "line-clamp-2")
          }
        >
          {data.explanation}
        </div>
        {/* <div className="text-lg" onClick={() => setRead(!read)}>
          <span> Read more...</span>
        </div> */}
      </div>
      <div className="p-5 flex justify-between items-center">
        <div className="flex ">
          {" "}
          <img
            className="pr-2 object-fill h-9"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAaklEQVRIiWNgGEDwH4opUsdENecQaYEfAwPDUwZUF/0ngJHVPYWagRPADKcEP8FnAbHhTrR+mscBCx6XUAUMmA8YyTQPw+d0zwejFoxaMGoBpLhmYCC/qEY2AyvwY4CU55TUBXgrnFGAAQBwMkhDjJtDDgAAAABJRU5ErkJggg=="
          />{" "}
          <span className="text-xl ">{data.date}</span>
        </div>

        <div>
          <img
            src={like ? heart : likeIcon}
            className="h-10 w-10 group-hover:scale-150 transition-all duration-500 ease-in-out sm:h-7 sm:w-7 md:h-10 md:w-10"
          />
        </div>
      </div>
    </div>
  );
}

export default Post;
