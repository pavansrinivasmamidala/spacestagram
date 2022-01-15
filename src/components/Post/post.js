import heart from "../../assets/heart.png";
import calender from "../../assets/calendar.png";
import heartWhite from "../../assets/heart-white.png";
import { useState } from "react";

function Post({ props }) {
  const data = props;
  const [like, setLike] = useState(false); // like toggle

  const convert = (date) => {
    let currentDate = new Date(date);
    return currentDate.toDateString(); // to convert date to readable format
  };

  return (
    <div
      className="flex flex-col shadow-md rounded-xl m-10 group  bg-black hover:shadow-xl  hover:scale-105  shadow-blue-800   ease-in-out  cursor-pointer  transition-all max-w-2xl"
      onClick={() => setLike(!like)}
    >
      <div className="flex items-center justify-center ">
        <img
          src={data.url}
          className="rounded-xl object-fill group-hover:opacity-[1.1]   transition-all ease-in-out shadow-xl"
          alt="Post of the Day"
        />
      </div>
      <div className=" text-2xl group-hover:opacity-95 font-semibold p-4 pl-6 z-2 text-white opacity-80">
        <span>{data.title}</span>
      </div>
      <div className="flex flex-col items-center pt-2 pb-2 break-normal ">
        <div
          className={
            "w-11/12 text-lg font-medium  transition-all duration-4000  ease-in-out line-clamp-2 text-slate-200 opacity-70 group-hover:opacity-90"
          }
        >
          <span> {data.explanation} </span>
        </div>
      </div>
      <div className="p-5 flex justify-between items-center">
        <div className="flex ">
          <img
            className="pr-3  object-fill h-8  "
            src={calender}
            alt="Calender Icon"
          />
          <span className="text-lg opacity-80 group-hover:opacity-95">{convert(data.date).slice(3)}</span>
        </div>

        <div>
          <img
            src={like ? heart : heartWhite}
            className="h-8 w-10  transition-all duration-500 ease-in-out sm:h-7 sm:w-7 md:h-10 md:w-10  group-hover:scale-125"
            alt="Like Icon"
          />
        </div>
      </div>
    </div>
  );
}

export default Post;
