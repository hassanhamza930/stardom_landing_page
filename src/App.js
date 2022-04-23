import Header from "./components/header";

function App() {
  return (
    <div style={{fontFamily:"Ubuntu"}} className="bg-gradient-to-br from-[#890CEB] to-[#2B0CEB] h-full w-full text-white/95 flex flex-col">
      
      <Header/>
      
      <div className="flex flex-col md:flex-row w-full bg-white ">
 
        <div className="h-64 md:w-3/4 w-full mt-10 text-black/80  p-5 text-5xl font-regular ">
          Changing the way you interact with your favourite celebrities.
        </div>

        <div style={{backgroundImage:"url('https://i.scdn.co/image/ab6761610000e5eb276369b9195d6f67470fd51a')"}} className="h-96 self-start ml-5 mb-10 w-3/4 md:w-1/4 bg-cover bg-center bg-red-500 rounded-md md:m-10">

        </div>
 
      </div>

    </div>
  );
}

export default App;
