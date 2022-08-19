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
                        <MdClose/>      
                        ) : (
                        <FiMenu/>
                        )}     
                    </button>
                    <ul className={`menuNav ${navbarOpen ? "showMenu" : ""}`}/> 
            </nav>
    );
};

//Map menu items here like what is done in footer.
    
export default Navbar;