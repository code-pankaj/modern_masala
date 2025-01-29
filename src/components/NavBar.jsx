import React from "react";

const Navigation = () => {
    return (
        <div className="flex">
            <ul className="list-none flex pr-10 items-center justify-between">
                <li>Home</li>
                <li>Food</li>
                <li>Restaurants</li>
            </ul>
        </div>
)}

const NavBar = () => {
    return (
    <div className="flex justify-between p-3">
        <h1 className="pl-10 items-center">Modern Masala</h1>
        <Navigation/>
    </div>
)}

export default NavBar;