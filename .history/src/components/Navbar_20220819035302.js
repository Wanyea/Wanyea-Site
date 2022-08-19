import React, { useState } from "react";
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

const Navbar = () => {
    const [ navbarOpen, setNavbarOpen ] = useState(false);

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }

    return (
            <nav className = "navBar">
                    <button onClick={handleToggle}> 
                        {navbarOpen ? (
                        <MdClose style = {{ color: "#fff", width: "20px", height: "20px"}} />      
                        ) : (
                        <FiMenu style={{ color: "#7b7b7b", width: "20px", height: "20px"}} />
                        )}     
                    </button>
                    <ul className={`menuNav ${navbarOpen ? "showMenu" : ""}`}/> 
            </nav>
    );
};

//Map menu items here like what is done in footer.
    
export default Navbar;