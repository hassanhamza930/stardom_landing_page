export default function Component1(){
    return(
        <div className="h-full flex flex-col md:flex-row w-full bg-white ">
 
            <div className="md:w-2/5 w-full mt-10 mb-10 text-black/80  p-5 text-5xl md:text-7 xl font-regular flex flex-col font-bold">
                <div>
                    Changing the way you interact with your favourite celebrities.
                </div>

                <div className="text-3xl mt-10 font-normal">
                    Stardom app allows you to interact with your favourite celebrities in a way that has never hit the mainstream before.
                </div>

            </div>

            <div style={{backgroundImage:"url('https://i.scdn.co/image/ab6761610000e5eb276369b9195d6f67470fd51a')"}} className="h-96 md:h-[400px] w-full md:w-3/5 self-center self-start bg-cover bg-center bg-red-500 gap-5 rounded-md md:m-10">

            </div>


        </div>
    )
}