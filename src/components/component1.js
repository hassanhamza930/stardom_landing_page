import FadeIn from "react-fade-in/lib/FadeIn";
import { useEffect, useState } from "react"
import ReactPlayer from "react-player"
import demo from "../assets/demo.mp4"

export default function Component1(){

    
    const[isPlaying,setPlaying]=useState(false);


    useEffect(()=>{
        setTimeout(() => {
            setPlaying(true);            
        }, 1000);
    },[]);
    

    return(
        <div className="h-full flex flex-col md:flex-row w-full bg-black/80 ">
 
            <FadeIn delay={500} className="md:w-2/5 w-full mt-10 mb-10 text-white  p-5 text-5xl md:text-7 xl font-regular flex flex-col font-bold">
                <div>
                    Changing the way you interact with your favourite celebrities.
                </div>

                <div className="text-2xl mt-10 font-normal">
                    Stardom monetizes the interaction between you and your favourite celebrities to ensure a mutually beneficial deal for both.
                </div>


            </FadeIn>

            <div className="h-96 md:h-[400px] w-full md:w-3/5 self-center self-start gap-5 rounded-md md:m-10 flex justify-center items-center">
                
                <ReactPlayer className="h-full w-full" url={demo} loop={true} controls={true} playing={isPlaying} />

            </div>


        </div>
    )



}