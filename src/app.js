import { React } from 'react';
import ReactDOM from 'react-dom/client';
import foodItemsList from './components/foodItems';
import navBar from './components/navBar';
import Restaurants from './components/restaurants';

const RestaurantsList = Restaurants.map((item) => {
    return (
        <div className = "restaurant">
            <img src = {item.img} alt = {item.name} />
            <h2>{item.name}</h2>
        </div>
    )
})

const App = () => {
    return (
        <>
            {navBar}
            <h1 className = "heading1">Food Items</h1>
            <div className = "foodItems">
                {foodItemsList}
            </div>
            <h1 className = "heading2">Restaurants</h1>
            <div className = "restaurants">
                {RestaurantsList}
            </div>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);