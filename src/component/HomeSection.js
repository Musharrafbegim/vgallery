import React from "react";
import { Link } from "react-router-dom";

export default function HomeSection() {
    return(
        <div>
            <div className="main">
                <img src="https://images.unsplash.com/photo-1564399580075-5dfe19c205f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" alt="home screen main section" className="img-main"></img>
                <div className="text-container">
                    <h1>Make your dreams come true</h1>
                    <p>Visit our gallery for more!</p>
                    <Link to="/view-more" className="btn-primary">View Item</Link>
                </div>
                <img src="https://images.unsplash.com/photo-1545989253-02cc26577f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="home screen main section" className="img-sec"></img>
                <img src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" className="img-tre"></img>
            </div>
            
        </div>
    )
}