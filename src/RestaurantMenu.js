import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./Config";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "./utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const {id} = useParams();

    const restaurant = useRestaurantMenu(id);
    
        return (!restaurant)?(<Shimmer/>):(
        <div className="menu">
            <div>
            
            <h3>Name:{restaurant.name}</h3>
            <br />

            <img className="restaurantImg" src={
                IMG_CDN_URL+restaurant.cloudinaryImageId
                } /><br />
                            <h3>Area: {restaurant.area}</h3>
                            <br />
            <h3>City: {restaurant.city}</h3><br />
            <h3>Rating: {restaurant.avgRating}</h3>
            </div>
        <div>
            <ul>
                <li>Menu</li>
                {
                Object.values(restaurant?.menu?.items).map((restaurantItem) => {
                return (<li key={restaurantItem.id}>{restaurantItem.name}</li>);
            })
                }
            </ul>
        </div>
        </div>
    );
}

export default RestaurantMenu;