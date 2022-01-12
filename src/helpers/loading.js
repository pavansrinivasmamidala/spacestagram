import rocket from "../assets/rocket.png";

export default function Loading() {
    return (
        <div className="flex justify-center items-center h-screen absolute right-0 left-0 top-0 bottom-0 w-screen bg-black z-20 ">
            <img 
                    className="animate-rocketAnimation"
                    src={rocket}
                    alt="Rocket Animation"
                    />   
        </div>
    )
}