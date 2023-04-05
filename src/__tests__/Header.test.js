import { render } from "@testing-library/react"
import { Provider } from "react-redux";
import Header from "../Header"
import store from "../utils/store";
import {StaticRouter, staticRouter} from 'react-router-dom/server';

test('Logo should load on header rendering ', () => {
    //load header
    const header = render(
        <StaticRouter>
    <Provider store={store}>
    <Header />
    </Provider>
    </StaticRouter>
    );
    const logo = header.getAllByTestId('logo');
    expect(logo[0].src).toBe('http://localhost/dummy.png');
    
})


test('Cart item should be 0 on header rendering ', () => {
    //load header
    const header = render(
        <StaticRouter>
    <Provider store={store}>
    <Header />
    </Provider>
    </StaticRouter>
    );
    const cartItem = header.getByTestId('cart-item');
    expect(cartItem.innerHTML).toBe('Cart - 2 Items');
    
})