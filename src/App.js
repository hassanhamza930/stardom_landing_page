import Header from "./components/header";
import Component1 from "./components/component1";

function App() {
  return (
    <div style={{fontFamily:"Ubuntu"}} className="bg-gradient-to-br from-[#890CEB] to-[#2B0CEB] h-full w-full text-white/95 flex flex-col">
      
      <Header/>
      



      <div className="h-full flex flex-col md:flex-row w-full bg-white ">
 
      <Component1/>

      </div>



    </div>
  );
}

export default App;
