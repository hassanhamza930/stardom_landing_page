

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Download from "./components/download";
import Home from "./components/home";



function App() {
  return (
      <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/download" element={<Download/>} />
        
      </Routes>
  );
}

export default App;
