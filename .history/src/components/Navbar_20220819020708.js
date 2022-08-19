import React, { useState } from "react";



class Navbar extends React.Component {
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