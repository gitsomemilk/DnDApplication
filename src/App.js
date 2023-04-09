
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Homepage from "./Pages/Home/Homepage";

function App() {
  return (
<>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
      </Routes>
</>
  );
}

export default App;
