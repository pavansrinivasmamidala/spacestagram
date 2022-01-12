import planet from "../../assets/planet.png";
import earth from "../../assets/earth.png";
import space from "../../assets/space.jpg";

function NavBar() {
  return (
    <div
      className="flex  justify-center items-center lg:h-1/6 md:h-2/6 sm:h-3/12 shadow-lg  z-10 sticky  text-slate-100 bg-black shadow-blue-700  "
      style={{
        backgroundImage: `url("${space}")`, // figured out a workaround cause bg-url[] is not working as intended in Tailwind 
      }}
    >
      <div className="flex flex-col justify-center items-center">
        <div className="text-4xl font-bold  pt-5 text-blue-500">

          <span>Spacestagram</span>
        </div>
        <div className="text-lg font-semibold pt-3 pb-8 text-blue-300">
          <span>Image sharing from the Final Frontier</span>
        </div>
      </div>

      <div className="z-10 absolute right-10 top-60 ">
        <img
          className="h-[20vh] animate-wiggleTopAndBottom duration-5000 "
          src={planet}
          alt="Planet"
        />
      </div>
      <div className="absolute left-[-200px] animate-wiggleLeftAndRight top-[600px]"> 
        <img className="rounded-full h-[70vh] opacity-75" src={earth} alt="Earth" />
      </div>
    </div>
  );
}

export default NavBar;
