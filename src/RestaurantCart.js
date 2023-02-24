import { IMG_CDN_URL } from "./Config";
const RestaurantCart = ({name, cloudinaryImageId, cusines, avgRating}) => {

    //   const {} = restaurantList.data;
       return (
           <div className="card">
               <img  alt="Restaurant cart" src={
                   IMG_CDN_URL+cloudinaryImageId} />
               <h3>{name}</h3>
               <h3>{cusines}</h3>
               <h3>{avgRating} stars</h3>
           </div>
   
   
       );
   }

   export default RestaurantCart;