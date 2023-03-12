import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const url = "https://course-api.com/react-useReducer-cart-project";

export const fetchCartItems = createAsyncThunk('cart/fetchCartItems', async () => {
    const response = await fetch(url);
    return response.json();
})

const initialState = {
    cartItems: cartItems,
    amount: cartItems.length,
    total: 0,
    isLoading: true
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
            state.amount = 0;
        },
        removeItem: (state, action) => {
            const id = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== id);
            state.amount -= 1;
        },
        increaseAmount: (state, action) => {
            const id = action.payload;
            const item = state.cartItems.find((item) => item.id === id);
            item.amount += 1;
        },
        decreaseAmount: (state, action) => {
            const id = action.payload;
            const item = state.cartItems.find((item) => item.id === id);
            item.amount -= 1;

            if (item.amount === 0) {
                state.cartItems = state.cartItems.filter((item) => item.id !== id);
                state.amount -= 1;
            }
        },

        calculateTotal: (state) => {
            state.total = state.cartItems.reduce((acc, item) => {
                return acc + item.price * item.amount;
            }, 0);
        }
    },
    extraReducers: {
        [fetchCartItems.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchCartItems.fulfilled]: (state, action) => {
            state.cartItems = action.payload;
            state.isLoading = false;
        },
        [fetchCartItems.rejected]: (state) => {
            state.isLoading = false;
        }
    }
})

export default cartSlice.reducer;
export const { clearCart, removeItem, increaseAmount, decreaseAmount, calculateTotal } = cartSlice.actions;