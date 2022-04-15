export default function Header(){
   return <div className=" flex flex-col md:flex-row justify-start md:justify-between items-start md:items-start p-10">
     
        <div className=" text-5xl md:text-6xl font-bold text-start flex flex-col">
          <div>
            Stardom
          </div>
          <div className="text-xl md:text-2xl font-normal mt-4">
            Celebrities are just a message away.
          </div>  
        </div>

        <div className="flex mt-5 flex-wrap justify-start items-center gap-5  md:gap-10 text-md md:text-2xl font-bold ">
          <button className="">Download</button>
          <button className="">About</button>
          <button className="">Contact</button>
        </div>
      </div>
}