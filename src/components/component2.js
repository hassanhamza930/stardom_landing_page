import back from "../assets/content.png";
import FadeIn from "react-fade-in";

export default function Component2(){
    return(
        <div className="h-full flex flex-col-reverse md:flex-row w-full bg-white ">
 
            <div className="h-96 md:h-[400px] w-full md:w-3/5 self-center self-start gap-5 rounded-md md:m-10 flex justify-center items-center">
                <div style={{backgroundImage:`url(${back})`}} className="flex self-center bg-cover bg-center h-96 w-full md:w-full md:bg-top   bg-red-500 rounded-md">

                </div>
            </div>



            <FadeIn delay={500} className="md:w-2/5 w-full mt-10 mb-10 text-black/80  p-5 text-5xl md:text-7 xl font-regular flex flex-col font-bold items-start justify-center">
                <div>
                    Instant Messaging
                </div>

                <div className="text-2xl mt-10 font-normal">
                    Send direct messages to your favourite celebrities for a small price and get into the conversation.
                    Ask for advice, give feedback or just say Hi, The possbilities are endless.
                </div>

            </FadeIn>

            


        </div>
    )
}