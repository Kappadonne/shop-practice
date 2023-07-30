import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
  itemQuantity: 0,
};

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState: initialState,
  reducers: {
    addItem: (state, action) => {
      const {
        img,
        title,
        discount,
        price,
        onDetails,
        id,
        totalQuantity,
        firstPrice,
      } = action.payload;
      const itemArleadyExists = state.items.find((item) => item.id === id);
      if (itemArleadyExists) {
        itemArleadyExists.totalQuantity += 1;
        itemArleadyExists.price += itemArleadyExists.firstPrice;

        state.itemQuantity += 1;
      } else if (!itemArleadyExists) {
        state.items.push({
          img: img,
          title: title,
          discount: discount,
          price: price,
          onDetails: onDetails,
          id: id,
          totalQuantity: totalQuantity,
          firstPrice: firstPrice,
        });
        state.itemQuantity += 1;
      }

      state.totalPrice = state.totalPrice += firstPrice;
    },
    deleteItem: (state, action) => {
      const { id, firstPrice } = action.payload;
      const selectedItemToDelete = state.items.find((item) => item.id === id);
      if (selectedItemToDelete.totalQuantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      }
      selectedItemToDelete.totalQuantity -= 1;
      selectedItemToDelete.price -= selectedItemToDelete.firstPrice;
      state.itemQuantity -= 1;

      state.totalPrice = state.totalPrice - firstPrice;
    },

    orderItems: (state) => {
      state.itemQuantity = 0;
      state.totalPrice = 0;
      state.items = [];
    },
  },
});

export const { addItem, deleteItem, orderItems } = checkoutSlice.actions;

export default checkoutSlice.reducer;
