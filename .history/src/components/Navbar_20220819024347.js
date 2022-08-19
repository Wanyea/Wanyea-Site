import React, { useState } from "react";

const Navbar = () => {
    const [ navbarOpen, setNavbarOpen ] = useState(false);

    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }

    return (
        <div>
            <nav className = "navBar">
                <button onClick={handleToggle}> {navbarOpen ? "Close" : "Open"} </button>
            </nav>
        </div>
    );
};

//Map menu items here like what is done in footer.
    
export default Navbar;