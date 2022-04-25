import demo from "../assets/demo.gif";
import raja from "../assets/raja.gif";



export default function Component4(){
    return(
        <div className="h-full flex flex-col md:flex-row-reverse w-full bg-white ">
 
            <div className="md:w-2/5 w-full mt-10 mb-10 text-black/80  p-5 text-5xl md:text-7 xl font-regular flex flex-col font-bold">
                <div>
                    Become an early adopter.
                </div>

                <div className="text-2xl mt-10 font-normal">
                  Sign up now to show your interest and recieve early bird discounts and promo codes.
                  We will notify you as soon as we launch.
                </div>

            </div>

            <div className="bg-black      h-96 md:h-[400px] w-full md:w-3/5 self-center self-start gap-5 rounded-md md:m-10 flex flex-col justify-center items-start">
                
                <input placeholder="Email" className="w-2/4 ml-5 p-2 border-2 border-black"></input>
                <input placeholder="Phone" className="w-2/4 ml-5 p-2 border-2 border-black"></input>
                <button className="ml-5 p-2 bg-red-500 w-24 rounded-sm ">Submit</button>

            </div>


        </div>
    )



}