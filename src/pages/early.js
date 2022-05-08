import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import back from "../assets/logo.png";


export default function Early(){
    

    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const navigate = useNavigate();


    return(
        <div style={{backgroundImage:`url(${back})`}} className="h-screen w-full bg-center bg-cover ">
            <div style={{fontFamily:"Ubuntu"}} className="bg-gradient-to-br from-[#890CEB]/20 to-[#2B0CEB]/50   backdrop-blur-md bg-black/80 h-full w-full flex flex-col  md:flex-row justify-even items-center p-4 md:p-10">
            
                <div className="w-full md:w-2/4 h-full flex flex-col items-start justify-center">
                    <div className="text-8xl font-bold text-white text-start ">
                        Hello!
                    </div>
                    <div className="ml-2 text-4xl font-regular text-white text-start">
                        You have discovered
                    </div>
                    <img className="mt-2 ml-2" width={200} height={200} src="/stardomLogo.png">
                    </img>
                    <div className=" ml-2 text-2xl font-regular text-white text-start mt-10">
                        Become an Early Adopter and<br></br>get notified when we launch the app.
                    </div>
                    {/* <a href="/download" className="hover:scale-105 bg-[#EB0C77] p-3 ml-2 w-36 rounded-sm  flex justify-center items-center mt-5 text-white ">
                        Download
                    </a> */}
                </div>


                <div className="w-full md:w-2/4 h-full mt-10 flex flex-col justify-center items-start ml-2">
                        
                        
                        <input onChange={(e)=>{
                            setEmail(e.target.value);
                        }} placeholder="Email" className="w-3/4 p-2 border-2 border-black text-black"></input>
                        <input
                        onChange={(e)=>{
                            setPhone(e.target.value);
                        }}
                        placeholder="Phone" className="mt-3 w-3/4 p-2 border-2 border-black text-black"></input>
                        <button
                        onClick={()=>{
                            fetch("https://freakh2o.pythonanywhere.com/?email="+email+"&phone="+phone);
                            Swal.fire({  
                                title: 'Submitted',  
                                type: 'success',  
                                text: 'We will notify you as soon as we launch',  
                            }); 
                            navigate("/download");
                        }}
                        className="ml-2 mt-5 p-2 bg-red-500 w-24 text-white rounded-sm ">Submit</button>
                        
                        <div className="text-md text-white ml-2 mt-5"><b>Contact:</b><br></br>stardompakistan@gmail.com<br></br>+923174631189<br></br>Lahore,Pakistan</div>

                </div>

            </div>
        </div>
    )
}