import { fireEvent, render, waitFor } from "@testing-library/react";
import Body from "../Body";
import { RESTAURANT_API_DATA } from "../mocks/data";
import '@testing-library/jest-dom'
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import store from "../utils/store";


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
           return Promise.resolve(RESTAURANT_API_DATA);
        },
    })
})



test("Shimmer should load on home page", () => {
    const body = render(<Body/>);
    const shimmer = body.getByTestId('shimmer-ui');  
    expect(shimmer.children.length).toBe(4);
})


test("Restaurant should load", async() => {
    const body = render(
    <StaticRouter>
        <Provider store={store}>
    <Body/>
    </Provider>
    </StaticRouter>
    
    );
    await waitFor(() => expect(body.getByTestId('search-btn')));
    const restaurantList = body.getByTestId('restaurant-list');  
    expect(restaurantList.children.length).toBe(15);
})


test("Search should work on home page", async() => {
    const body = render(
    <StaticRouter>
        <Provider store={store}>
    <Body/>
    </Provider>
    </StaticRouter>
    
    );
    await waitFor(() => expect(body.getByTestId('search-btn')));

    const searchInput = body.getByTestId("search-input");
     fireEvent.change(searchInput, {
        target: {
            value: 'burger',
        },
     })   

    const searchBtn = body.getByTestId('search-btn');
    fireEvent.click(searchBtn);
    const restaurantList = body.getByTestId('restaurant-list');  
    expect(restaurantList.children.length).toBe(2);
})