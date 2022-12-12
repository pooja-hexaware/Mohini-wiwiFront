import { createSlice } from  "@reduxjs/toolkit";
import { fetchMenuData,fetchMenuDataforEdit}from "./menu.action";

  const menuData = createSlice({
    name: "menuStore",
    initialState: {
      menuData: { menudata: [], loading: true },
    
      menuDataforEdit : {menuDataforEdit:[], loading:true},
      currentMenuData: {
        submenudata: {
          id: ""
        }
        
      },
      currentMenuData:[]
    },
    reducers: {
      setisChecked: (state, actions) => {
        state.currentMenuData.subMenudata.id = actions.payload;
       // state.currentTypeData.type.isChecked = actions.payload;
      },
    },
    extraReducers: {
      [fetchMenuData.pending]: (state) => {
        state.menuData.loading = false;
      },
      [fetchMenuData.fulfilled]: (state, actions) => {
        state.menudata.menudata = actions.payload.menudata;
        state.menudata.loading = actions.payload.loading;
      },
     
    [fetchMenuDataforEdit.fulfilled]: (state, actions) => {
        state.menuDataforEditdata.menuDataforEditdata = actions.payload.menuDataforEditdata;
        state.menuDataforEditdata.loading = actions.payload.loading;
      },
    },
  });

  export const { setisChecked } = menuData.actions;
  export default menuData.reducer;
  