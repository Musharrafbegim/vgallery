import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
    
    return(
        <div className="navbar">
            <nav className="nav">
                 <ul>
                    <CustomLink to="/artists">Artists</CustomLink>
                    <CustomLink to="/collections">Collections</CustomLink>
                    <Link to="/" className="site-title">VGallery</Link>
                    <CustomLink to="/contacts">Contacts</CustomLink>
                    <CustomLink to="/">Home</CustomLink>
                 </ul>
            </nav>
        </div>
    )
}

function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true});
    return(
        <li className={isActive ? "active": ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}