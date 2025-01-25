import Search from "./searchBox";

const navBar = (
    <div className = "header">
        <h1>Modern Masala</h1>
        <div className = "navBar">
            <ul>
                <li><Search/></li>
                <li>Food</li>
                <li>Restaurants</li>
                <li>Search</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
);

export default navBar;