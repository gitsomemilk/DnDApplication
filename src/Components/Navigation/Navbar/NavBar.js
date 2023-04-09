import React  from 'react';
import {useNavigate} from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
    const navigate = useNavigate();



    function handleSignup() {
        navigate("/signup")
    }
    function homePage(){
        navigate("/")
    }
    function handleLogin() {
        navigate("/login")
    }
    function handleMB() {
        navigate("/monsterbook")
    }
    function handleAbout() {
        navigate("/about")
    }

    return (
        <>
            <nav>
                <div className="inner-left">
                <h2 className="nav-logo" onClick={homePage}><a> Logo</a> </h2>
                <h2 className="nav-items" onClick={handleMB}><a>Monsterbook</a></h2>
                <h2 className="nav-items" onClick={handleAbout}><a>About</a></h2>
                </div>
                <br/>
                <div className="inner-right">
                <h2 className="nav-items" onClick={handleLogin}><a>Login</a></h2>
                <h2 className="nav-item-1" onClick={handleSignup}><a>Signup</a></h2>
                </div>
            </nav>
        </>

    );
};

export default NavBar;