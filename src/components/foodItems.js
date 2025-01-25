import images from '../assets/images.js'

const foodItems = [
    {
        name: "Pizza",
        img: images.pizza,
    },
    {
        name: "Noodles",
        img: images.noodles,
    },
    {
        name: "Burger",
        img: images.burger,
    },
    {
        name: "Pancake",
        img: images.pancake,
    },
    {
        name: "Coffee",
        img: images.coffee,
    },
]

const foodItemsList = foodItems.map((item) => {
    return (
        <div className = "foodItem">
            <img src = {item.img} alt = {item.name} />
            <h2>{item.name}</h2>
        </div>
    );
}
);

export default foodItemsList;