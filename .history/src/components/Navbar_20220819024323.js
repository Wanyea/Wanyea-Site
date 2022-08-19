import React, { useState } from "react";

const Navbar = () => {
    const [ navbarOpen, setNavbarOpen ] = useState(false);

    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }
    
    return (
        <nav className = "navBar">
            <button onClick={handleToggle}> {navbarOpen ? "Close" : "Open"} </button>
        </nav>
    );
};

//Map menu items here like what is done in footer.
    
export default Navbar;