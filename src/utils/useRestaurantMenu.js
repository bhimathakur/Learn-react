import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../Config";

const useRestaurantMenu = (id) => {

    console.log(id);

    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        console.log("hello");
        getMenu(id);
        console.log(id);

    }, []);
    async function getMenu(id) {
        const response = await fetch(FETCH_MENU_URL+id);
        const json = await response.json();
        setRestaurant(json.data);
    }
    return restaurant;
}

export default useRestaurantMenu;