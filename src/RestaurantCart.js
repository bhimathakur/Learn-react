import { IMG_CDN_URL } from "./Config";
const RestaurantCart = ({name, cloudinaryImageId, cusines, avgRating}) => {

    //   const {} = restaurantList.data;
       return (
           <div className="p-5 m-3 shadow-lg bg-pink-300">
               <img className="w-60" alt="Restaurant cart" src={
                   IMG_CDN_URL+cloudinaryImageId} />
               <h3 className="font-bold break-normal">{name}</h3>
               <h3>{cusines}</h3>
               <h3>{avgRating} stars</h3>
           </div>
   
   
       );
   }

   export default RestaurantCart;