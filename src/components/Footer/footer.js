import nasa from "../../assets/nasa.jpg"

function Footer(){
    return (
        <div className="flex justify-between items-center bg-black ">
            <div className="flex justify-center items-center">
                <img 
                className="h-80 p-20"
                src={nasa}
                alt=""
                />
                <div className="">
                    <div className="text-white text-2xl ">
                    National Aeronautics and Space Administration
                    </div>
                <div className="text-white text-lg pt-5">
                    Astronomy Picture of the Day
                </div>
                </div>
                
            </div>
            <div className="pr-60">
            <div className="text-white text-2xl pr-40">
                Spacestagram
            </div>
            <div className="text-white text-lg pt-4">
                Image sharing from the Final Frontier
            </div>
            </div>
        </div>
    )
}


export default Footer;