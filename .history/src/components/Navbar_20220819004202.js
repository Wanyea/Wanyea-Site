import React, { useState } from "react";
const [ navbarOpen, setNavbarOpen ] = useState(false);

return (
    <nav className = "navBar">
        <button> {navBarOpen ? "Close" : "Open" </button>
    </nav>
)