import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./Config";
import Shimmer from "./Shimmer";
import { addItem } from "./utils/cartSlice";
import useRestaurantMenu from "./utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const {id} = useParams();

    const restaurant = useRestaurantMenu(id);

    const dispatch = useDispatch();

    const handleAddItem = () => {

        dispatch(addItem('grapes'));

    }
    
        return (!restaurant)?(<Shimmer/>):(
        <div className="flex">
            <div className="bg-green-50 p-5 m-5">
            
            <h3 className="font-bold">Name:{restaurant?.cards[0]?.card?.card?.info.name}</h3>
            <br />

            <img className="w-48 h-48" src={
                IMG_CDN_URL+restaurant?.cards[0]?.card?.card?.info.cloudinaryImageId
                } /><br />
                            <h3>Area: {restaurant?.cards[0]?.card?.card?.info.area}</h3>
                            <br />
            <h3>City: {restaurant?.cards[0]?.card?.card?.info.city}</h3><br />
            <h3>Rating: {restaurant?.cards[0]?.card?.card?.info.avgRating}</h3>
            </div>
            <div>
                <button className="m-2 p-2 bg-green-400 rounded-lg" onClick={()=>{handleAddItem();}}>Add Item</button>
            </div>
        <div className="flex p-5 m-5">
            <ul >
                <li className="p-1 font-bold">Menu</li>
                {
                //Object.values(restaurant?.card?.card?.info).map((restaurantItem) => {

                
                Object.values(restaurant?.cards[0]?.card?.card?.info).map((restaurantItem) => {
                return (<li className="p-1" key={restaurantItem.id}>{restaurantItem.name}</li>);
            })
                }
            </ul>
        </div>
        </div>
    );
}

export default RestaurantMenu;