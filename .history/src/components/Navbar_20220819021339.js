import React, { useState } from "react";

function Navbar(props) {
    const [ navbarOpen, setNavbarOpen ] = useState(false);
    const Navbar = () => {
        return (
            <nav className = "navBar">
                <button> {navbarOpen ? "Close" : "Open"} </button>
            </nav>
        );
    };
    
}

export default Navbar;