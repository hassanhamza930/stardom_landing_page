import Header from "./components/header";

function App() {
  return (
    <div style={{fontFamily:"Ubuntu"}} className="bg-gradient-to-br from-[#890CEB] to-[#2B0CEB] h-full w-full text-white/95 flex flex-col">
      
      <Header/>
      
      <div className="flex flex-row h-screen w-full bg-white">
 
        <div className="h-full w-2/4 mt-10 text-black/80  p-10 text-3xl font-bold">
          Changing the way you interact with your favourite celebrities.
        </div>

        <div>

        </div>
 
      </div>

    </div>
  );
}

export default App;
