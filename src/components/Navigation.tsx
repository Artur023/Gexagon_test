import React from "react";
import {Link} from "react-router-dom";

export function Navigation() {
    return (
        <nav className="flex justify-around px-5 h-[50px] bg-amber-300 items-center shadow-md">
            <Link to="auth">Auth</Link>
            <Link to="/">Main</Link>
            <Link to="registration">Registration</Link>
        </nav>
    )
}