import planet from "../../assets/planet-image.png";
import earth from "../../assets/earth.png";
function NavBar() {
  return (
    <div className="flex  justify-center items-center lg:h-1/6 md:h-2/6 sm:h-3/12 shadow-xl  z-10 sticky bg-slate-100  dark:text-slate-100 dark:bg-black dark:shadow-blue-800 dark:shadow-sm dark:bg-[url('/home/pavan/Documents/shopify-intern/spacestagram/src/assets/space.jpg')]">
      <div className="flex flex-col justify-center items-center">
      <div className="text-4xl font-bold  pt-10 text-blue-500">
        Spacestagram
      </div>
      <div className="text-lg font-semibold pt-3 pb-8 text-blue-300">
        Image sharing from the Final Frontier
      </div>
      </div>
      
      
      <div className="z-10 absolute right-10 top-60 dark:block hidden">
        <img
          className="h-[20vh] animate-wiggleTopAndBottom duration-5000 "
          src={planet}
          alt=""
        />
      </div>
      <div className="absolute left-[-200px] animate-wiggleLeftAndRight top-[500px]">
        <img className="rounded-full h-[70vh] opacity-75" src={earth} alt="" />
      </div>
    </div>
  );
}

export default NavBar;
