import nasa from "../../assets/nasa.jpg"
import rocket from "../../assets/rocket.png";

function Footer(){
    return (
        <div className="flex justify-between items-center bg-black overflow-hidden border-y border-blue-500">
            <div className="flex justify-center items-center">
                <img 
                className="h-80 p-20 rounded-full "
                src={nasa}
                alt=""
                />
                <div className="">
                    <div className="text-white text-2xl ">
                    National Aeronautics and Space Administration
                    </div>
                <div className="text-white text-lg pt-2">
                    Astronomy Picture of the Day
                </div>
                </div>
                
            </div>

            <div className="absolute right-0 animate-rocketAnimation pb-[70vh] overflow-clip">
                    <img 
                    className=""
                    src={rocket}
                    alt=""
                    />
                </div>
            <div className="pr-60">
              
            <div className="text-white text-2xl pr-40">
                Spacestagram
            </div>
            <div className="text-white text-lg pt-4">
                Image sharing from the Final Frontier
            </div>
            <div className="text-blue-500 text-md pt-4 flex">
                <div >Developed by:</div>
                <div className="pointer"><a href="https://pavansrinivas.tech" target="_blank" rel="noreferrer" className="pointer">@pavan_srinivas</a></div>
                
            </div>
            </div>
        </div>
    )
}


export default Footer;