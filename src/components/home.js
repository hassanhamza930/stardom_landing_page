import Header from "./header";
import Component1 from "./component1";
import Component2 from "./component2";
import Component3 from "./component3";
import Component4 from "./component4";

export default function Home() {
    return (
      <div style={{fontFamily:"Ubuntu"}} className="bg-gradient-to-br from-[#890CEB] to-[#2B0CEB] h-full w-full text-white/95 flex flex-col">
        
        <div className="bg-black/80">
          <Header/>
        </div>
      
       <Component1/>
       <Component2/>
       <Component3/>
       <Component4/>
  
  
  
      </div>
    );
  }