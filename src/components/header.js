export default function Header(){
   return <div className=" flex flex-col md:flex-row  md:justify-between items-start md:items-center p-5">
     
        <div className=" text-4xl md:text-5xl font-bold text-start flex flex-col">
          <div>
            Stardom
          </div>

        </div>

        <div className="flex mt-5 md:mt-0 flex-wrap justify-center items-center gap-5  md:gap-10 text-md md:text-xl font-bolds ">
          <button className="">Download</button>
          <button className="">About</button>
          <button className="">Contact</button>
        </div>
      </div>
}