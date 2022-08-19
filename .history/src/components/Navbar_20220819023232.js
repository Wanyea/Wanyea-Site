import React, { useState } from "react";

const Navbar = () => {
    const [ navbarOpen, setNavbarOpen ] = useState(false);
    return (
        <nav className = "navBar">
            <button> {navbarOpen ? "Close" : "Open"} </button>
        </nav>
    );
};
    
export default Navbar;