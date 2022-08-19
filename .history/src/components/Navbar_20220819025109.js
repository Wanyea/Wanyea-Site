import React, { useState } from "react";

const Navbar = () => {
    const [ navbarOpen, setNavbarOpen ] = useState(false);

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }

    return (
        <div>
            <nav className = "navBar">
                <button onClick={handleToggle}> {navbarOpen ? "Close" : "Open"} </button>
                <ul className={`menuNav ${navbarOpen ? "showMenu" : ""}`}/> 
            </nav>
        </div>
    );
};

//Map menu items here like what is done in footer.
    
export default Navbar;