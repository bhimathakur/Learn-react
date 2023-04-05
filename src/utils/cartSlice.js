import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items:["Apple", "Mango"]
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        clearCart: (state, action) => {
            state.items = []
        },
        removeItem:  (state, action) => {
            state.items.pop(action.payload);
        }
    }
})

export const {addItem, clearCart, removeItem} = cartSlice.actions;
export default cartSlice.reducer;