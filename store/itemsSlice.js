import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allAvailableItems: [],
};

export const itemsSlice = createSlice({
  name: "items",
  initialState: initialState,
  reducers: {
    getData: (state, action) => {
      const allItems = action.payload;
      function isObjectExists(item) {
        return state.allAvailableItems.some(
          (existingItem) => existingItem.id === item.id
        );
      }
      const uniqueObjects = allItems.filter((item) => !isObjectExists(item));
      state.allAvailableItems.push(...uniqueObjects);
    },
  },
});

export const { getData } = itemsSlice.actions;

export default itemsSlice.reducer;
