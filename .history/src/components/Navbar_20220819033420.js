import React, { useState } from "react";
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

const Navbar = () => {
    const [ navbarOpen, setNavbarOpen ] = useState(false);

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }

    const buttonStyle = {
        position: "fixed",
        left: 40,
        top: 40,
        background: "transparent",
        border: "none",
        
    };

    return (
            <nav className = "navBar">
                <div style = {buttonStyle}>
                    <button onClick={handleToggle}> 
                        {navbarOpen ? (
                        <MdClose style = {{ color: "#fff", width: "40px", height: "40px" }} />      
                        ) : (
                        <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
                        )}     
                    </button>
                    <ul className={`menuNav ${navbarOpen ? "showMenu" : ""}`}/> 
                </div>
            </nav>
    );
};

//Map menu items here like what is done in footer.
    
export default Navbar;