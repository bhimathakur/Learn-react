import React, { useEffect, useState } from "react";
import NoRecordFound from "./NoRecordFound";
import RestaurantCart from "./RestaurantCart";
import Shimmer from "./Shimmer";
import {Form, Link} from "react-router-dom";
import useIsOnLine from "./utils/useIsOnLine";
import filterResult from "./utils/helper";

const Body = () => {

const [searchText, setSearchText] = useState("");
const [restaurant, setRestaurant] = useState([]);
const [filteredRestaurant, setFilteredRestaurant] = useState([]);

async function getRestaurant() {
    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING",  {mode:'cors'});
    const json = await response.json();
    setRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
}

useEffect(()=>{
    getRestaurant();
}, []);

const isOnline = useIsOnLine();
if(!isOnline) {
     return "You are offline please connect your internet...";
    }

(filteredRestaurant.length === 0)? 'No record found':null


    return restaurant.length == 0 ? (<Shimmer/>) : (
        <>
        <div className="search-container p-2 m-5 bg-green-50 shadow-sm">
            <input type ="text" name="search" className="searchInput" data-testid="search-input" onChange={(e) => {setSearchText(e.target.value);}} value={searchText} />
            <input className="m-2 border-spacing-0.5 bg-green-400 rounded-lg" name="submit" onClick={() => {
                const filterData = filterResult(searchText, restaurant);
                setFilteredRestaurant(filterData);
                }} type="submit" value="Search" data-testid="search-btn" />
        </div>
        <div className="flex flex-wrap" data-testid="restaurant-list">
            
            {
                (filteredRestaurant.length == 0 ? (<NoRecordFound />):(
            filteredRestaurant.map((list) =>{
                return (
                    <Link to={"/restaurant/"+list.data.id}>
                <RestaurantCart {...list.data} key={list.data.id} /></Link>
                );

            })
                ))
             }
        </div>
        </>
    );
}

export default Body;