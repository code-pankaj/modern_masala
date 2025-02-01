import React from "react";
import SearchBar from "./SearchBar";

const Navigation = () => {
    return (
        <div className="flex ">
            <ul className="list-none flex pr-20 items-center gap-10 NavBar">
                <li className="NavBar">Home</li>
                <li className="NavBar">Food</li>
                <li className="NavBar">Restaurants</li>
            </ul>
        </div>
)}

const NavBar = ({ onSearch }) => {
    return (
    <div className="flex justify-between p-3 NavBar">
        <h1 className="pl-10 items-center NavBar">Modern Masala</h1>
        <SearchBar onSearch={onSearch} />
        <Navigation/>
    </div>
)}

export default NavBar;