import React, { useState } from "react";

const [ navbarOpen, setNavbarOpen ] = useState(false);

const Navbar = () => {
    return (
        <nav className = "navBar">
            <button> {navBarOpen ? "Close" : "Open"} </button>
        </nav>
    );
};

export default Navbar;