import ReactPlayer from "react-player"
import raja from "../assets/raja.mp4"
import vidReq from "../assets/vidReq.svg";


export default function Component3(){
    return(
        <div className="h-full flex flex-col md:flex-row w-full bg-[#E8630A] justify-center items-center ">
 
            <div className="md:w-2/5 w-full mt-10 mb-10 text-white  p-5 text-5xl md:text-7 xl font-regular flex flex-col font-bold">
                <div>
                    Video Shoutouts.
                </div>

                <div className="text-2xl mt-10 font-normal">
                    Get customized videos for yourself or your friends by your favourite celbrities.
                    Wish a friend for his birthday, get an apology video and much more!
                </div>

            </div>

            <div className="h-96 md:h-[400px] w-full md:w-3/5 self-center self-start gap-5 rounded-md m-0 md:m-10 flex justify-center items-center">
                
                {/* <ReactPlayer className="h-full w-full" url={raja} loop={true} controls={true} playing={true} /> */}
                <div style={{backgroundImage:`url('${vidReq}')`}} className="bg-center bg-cover h-full w-full rounded-xl"></div>

            </div>


        </div>
    )



}