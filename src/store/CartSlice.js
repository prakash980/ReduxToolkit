//Slice(What is slice in Redux)
//A function that accepts an initial state, 
// an object of reducer functions, and a "slice name", 
// and automatically generates action creators and action 
// types that correspond to the reducers and state.
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {            //the function add and delete are used to change the state
        add(state, action){
            state.push(action.payload);
        },
        remove(state, action){
            state = state.filter((item)=> item.id != action.payload);
        },
    },
});

export const {add, remove} = cartSlice.actions;
export default cartSlice.reducer;