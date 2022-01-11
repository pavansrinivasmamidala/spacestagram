import spinner from "../assets/Spinner.gif";

export default function Loading() {
    return (
        <div className="flex justify-items-center items-center h-screen">
            <img src={spinner} className="h-40 w-40" alt="Loading"/>
            
        </div>
    )
}