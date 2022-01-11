import likeIcon from "../../assets/like.png";
import heart from "../../assets/heart.png";
import calender from "../../assets/calendar.png";
import heartWhite from "../../assets/heart-white.png";
import { useState } from "react";

function Post({ props }) {
  const data = props;
  const [like, setLike] = useState(false);

  const convert = (date) => {
    let currentDate = new Date(date);
    return currentDate.toDateString();
  }; //bg-slate-100  hover:bg-slate-200

  return (
    <div
      className="flex flex-col   hover:shadow-xl rounded-xl m-10 group bg-slate-100 dark:hover:fill-slate-700 dark:hover:drop-shadow-lg hover:bg-slate-200 dark:bg-black dark:shadow-sm dark:shadow-blue-800   ease-in-out  cursor-pointer  transition-all max-w-3xl"
      onClick={() =>setLike(!like)}
    >
      <div className="flex items-center justify-center ">
        <img
          src={data.url}
          className="rounded-xl object-fill group-hover:opacity-[0.9] opacity-100  transition-all ease-in-out shadow-xl"
          alt=""
        />
      </div>
       <div className=" text-3xl font-semibold p-4 pl-6 z-2 dark:text-white">{data.title}</div>
      <div className="flex flex-col items-center pt-2 pb-2 break-normal ">
        <div
          className={
            "w-11/12 text-xl font-medium  transition-all duration-4000  ease-in-out line-clamp-2 dark:text-slate-200" 
          }
        >
          {data.explanation}
        </div>
         
       </div>
      <div className="p-5 flex justify-between items-center">
        <div className="flex ">
          <img
            className="pr-2  object-fill h-9 dark:hidden"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAaklEQVRIiWNgGEDwH4opUsdENecQaYEfAwPDUwZUF/0ngJHVPYWagRPADKcEP8FnAbHhTrR+mscBCx6XUAUMmA8YyTQPw+d0zwejFoxaMGoBpLhmYCC/qEY2AyvwY4CU55TUBXgrnFGAAQBwMkhDjJtDDgAAAABJRU5ErkJggg=="
            alt=""
          />
          <img
            className="pr-3  object-fill h-8 hidden dark:block"
            src={calender}
            alt="" 
          />
          <span className="text-xl ">{convert(data.date).slice(3)}</span>
        </div>

        <div>
          <img
            src={like ? heart : likeIcon}
            className="h-10 w-10 group-hover:scale-150 transition-all duration-500 ease-in-out sm:h-7 sm:w-7 md:h-10 md:w-10 dark:hidden"
            alt=""
          />
          <img
            src={like ? heart : heartWhite}
            className= "h-8 w-10  transition-all duration-500 ease-in-out sm:h-7 sm:w-7 md:h-10 md:w-10 hidden dark:block group-hover:scale-125" 
            alt=""
          />
        </div>
      </div> 
    </div>
  );
}

export default Post;
