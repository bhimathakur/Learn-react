import { useEffect, useState } from "react";

const useIsOnLine = () => {
const [isOnline, setIsOnline] = useState(true);

useEffect(() => {
    window.addEventListener('online', () =>{setIsOnline(true)})
    window.addEventListener('offline', () =>{setIsOnline(false)})
    console.log(isOnline);
    
},[]);
return isOnline;

}

export default useIsOnLine;