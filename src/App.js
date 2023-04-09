
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Homepage from "./Pages/Home/Homepage";
import Loginpage from "./Pages/Login/Loginpage";
import Signuppage from "./Pages/Signup/Signuppage";
import Adminpage from "./Pages/Users/Admin/Adminpage";
import DMpage from "./Pages/Users/DungeonMaster/DMpage";
import Userpage from "./Pages/Users/Userpage";
import Monsterbookpage from "./Pages/Utility/Monsterbook/Monsterbookpage";
import Aboutpage from "./Pages/Utility/About/Aboutpage";

function App() {
  return (
<>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/login" element={<Loginpage/>}/>
        <Route path="/signup" element={<Signuppage/>}/>
        <Route path="/admin" element={<Adminpage/>}/>
        <Route path="/master" element={<DMpage/>}/>
        <Route path="/user" element={<Userpage/>}/>
        <Route path="/monsterbook" element={<Monsterbookpage/>}/>
        <Route path="/about" element={<Aboutpage/>}/>
      </Routes>
</>
  );
}

export default App;
