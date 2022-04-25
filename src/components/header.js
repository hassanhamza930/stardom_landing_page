import { Link } from "react-router-dom";


export default function Header(){
   return <div style={{fontFamily:"Koulen"}} className=" flex flex-col md:flex-row  md:justify-between items-start md:items-center p-5">
     
        <div className=" text-4xl md:text-5xl text-start flex flex-col">
          <div>
            Stardom
          </div>

        </div>

        <div className="flex mt-5 md:mt-0 flex-wrap justify-center items-center gap-5  md:gap-10 text-md md:text-xl font-bolds ">
          <Link to="/download">Download</Link>
          {/* <button className="">About</button> */}
          <button
          onClick={()=>{
            window.scrollTo({left:0, top:document.body.scrollHeight,behavior:"smooth"});

          }}
          className="">Contact</button>
        </div>
      </div>
}