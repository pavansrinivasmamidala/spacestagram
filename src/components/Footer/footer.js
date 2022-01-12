import nasa from "../../assets/nasa.jpg";
import purplePlanet from "../../assets/purple-planet.png";

function Footer() {
  return (
    <div>
      <div className="z-0 overflow-visible absolute  left-[-10vh] mb-32 hidden ">
        <img className="rounded-full " src={purplePlanet} alt="purple planet" />
      </div>
      <div className="flex justify-between items-center z-10 bg-black overflow-hidden shadow-md shadow-blue-500 border-y border-blue-600 shadow-outer">
        <div className="flex justify-center items-center">
          <img className="h-80 p-20 rounded-full " src={nasa} alt="Nasa Logo" />
          <div className="">
            <div className="text-white text-2xl ">
              National Aeronautics and Space Administration
            </div>
            <div className="text-white text-lg pt-2">
              Astronomy Picture of the Day
            </div>
          </div>
        </div>

        <div className="pr-60">
          <div className="text-white text-2xl pr-40">Spacestagram</div>
          <div className="text-white text-lg pt-4">
            Image sharing from the Final Frontier
          </div>
          <div className="text-blue-500 text-md pt-4 flex">
            <div className="pr-2">Developed by:</div>
            <div className="pointer">
              <a
                href="https://pavansrinivas.tech"
                target="_blank"
                rel="noreferrer"
                className="pointer"
              >
                @pavan_srinivas
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

// I used many copyright assets (I assume cause I downloaded from the Internet)
