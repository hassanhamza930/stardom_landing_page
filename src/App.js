import Header from "./components/header";
import Component1 from "./components/component1";
import Component2 from "./components/component2";
import Component3 from "./components/component3";
import Component4 from "./components/component4";

function App() {
  return (
    <div style={{fontFamily:"Ubuntu"}} className="bg-gradient-to-br from-[#890CEB] to-[#2B0CEB] h-full w-full text-white/95 flex flex-col">
      
      <Header/>
      



     <Component1/>
     <Component2/>
     <Component3/>
     <Component4/>



    </div>
  );
}

export default App;
