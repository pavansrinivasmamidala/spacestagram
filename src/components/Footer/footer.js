import nasa from "../../assets/nasa.jpg"
import rocket from "../../assets/rocket.png";

function Footer(){
    return (
        <div className="flex justify-between items-center bg-black overflow-hidden">
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

            <div className="absolute right-0 animate-rocketAnimation pb-[45vh] overflow-clip">
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
            <div className="text-white text-md pt-4">
                Developed by: @pavan_srinivas
            </div>
            </div>
        </div>
    )
}


export default Footer;