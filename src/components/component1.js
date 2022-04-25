import raja from "../assets/raja.gif";
import demo from "../assets/demo.gif";



export default function Component1(){
    return(
        <div className="h-full flex flex-col md:flex-row w-full bg-white ">
 
            <div className="md:w-2/5 w-full mt-10 mb-10 text-black/80  p-5 text-5xl md:text-7 xl font-regular flex flex-col font-bold">
                <div>
                    Changing the way you interact with your favourite celebrities.
                </div>

                <div className="text-2xl mt-10 font-normal">
                    Stardom monetizes the interaction between your favourite celebrity and you to ensure a mutually beneficial deal for both.
                </div>

            </div>

            <div className="h-96 md:h-[400px] w-full md:w-3/5 self-center self-start gap-5 rounded-md md:m-10 flex justify-center items-center">
                
                <div style={{backgroundImage:`url(${demo})`}} className="flex self-center bg-cover bg-center h-96 w-full md:w-full md:bg-top   bg-red-500 rounded-md">
                   
                </div>

            </div>


        </div>
    )



}