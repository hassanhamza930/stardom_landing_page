

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Download from "./components/download";
import Home from "./components/home";
import Early from "./pages/early";



function App() {
  return (
      <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/download" element={<Download/>} />
        <Route path="/early" element={<Early/>} />

      </Routes>
  );
}

export default App;
