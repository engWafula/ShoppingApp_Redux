import { createSlice } from "@reduxjs/toolkit";

const initialState={
    itemsList: [],
    totalQuantity:0,
    showCart:false
     
}

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
        const newItem=action.payload
        //to check if the item is already there
        const existingItem= state.itemsList.find((item)=>item.id===newItem.id)
        if(existingItem){
            existingItem.quantity=existingItem.quantity+1
            existingItem.totalPrice+=newItem.price
        }
        else{
            state.itemsList.push({
                id:newItem.id,
                price:newItem.price,
                quantity:1,
                totalPrice:newItem.price,
                name:newItem.name
                 
            })
            state.totalQuantity++;
        }

        },

        remove:(state,action)=>{
            const existingItem=state.itemsList.find(item=>item.id===action.payload)
            if(existingItem.quantity===1){
             state.itemsList=state.itemsList.filter(item=>item.id!==action.payload)
             state.totalQuantity--
            }
            else{
                existingItem.quantity--
                existingItem.totalPrice-=existingItem.price
            }

        },
        showCart:(state)=>{
           state.showCart=!state.showCart
        }
    }
})

export const {showCart,remove,addToCart}=cartSlice.actions

export default cartSlice.reducer