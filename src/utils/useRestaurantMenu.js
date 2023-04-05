import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../Config";

const useRestaurantMenu = (id) => {

    console.log(id);

    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        getMenu(id);
        
    }, []);
    async function getMenu(id) {
        const response = await fetch(FETCH_MENU_URL+id);
        const json = await response.json();
        //console.log(json.data.cards[0].card.card.info);
        setRestaurant(json.data);
    }
    return restaurant;
}

export default useRestaurantMenu;