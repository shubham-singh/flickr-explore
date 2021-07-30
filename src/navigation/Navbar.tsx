import { useState } from "react";
import Searchbar from "../search/Searchbar"

const Navbar = () => {

    return (
        <nav style={{position: "sticky", top: "0px"}} className="nav nav-classic pt-xs pb-xs">
            <Searchbar />
        </nav>
    );
}

export default Navbar;