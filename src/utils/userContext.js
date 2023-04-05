import {createContext} from 'react';

const userContext = createContext({
    user:{
        name: 'Bhima Thakur',
        email: 'bhimathakur@gamil.com'
    } 
});

export default userContext;