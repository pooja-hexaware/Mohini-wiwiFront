import { createAsyncThunk } from "@reduxjs/toolkit";
import menuService from "../../../"

export const putMenuData = createAsyncThunk("menuStore/putmenuData", async (menuData) => {
   
    const putData = async () => {
      return menuService.putMenuData(menuData.data, menuData.id) 
    }
  
    try {
      const rawData = await putData();
      console.log("Put menu data response", rawData);
      return rawData;
      
    } catch (err) {
      console.log("Error :", err);
    }
  }
  );


export const fetchMenuData = createAsyncThunk("menuStore/fetchmenuData", async () => {
  const fetchData = async () => {
    return menuService.getMenuData();
  }

  try {
    const rawData = await fetchData();
    const finalMenuData = [];
    for (const menu of rawData) {
      const menuData = {
        id: menu.id,
        name: menu.attributes.menuName,
        description: menu.attributes.menudescription
             };
      finalMenuData.push(menuData);
    }
    console.log("about actions",menuData)
    return {
      menudata: finalmenuData.length !== 0 ? finalmenuData : [],
      loading: false,
    };
  } catch (err) {
    console.log("Error :", err);
  }
}
);


export const fetchmenuDataforEdit = createAsyncThunk("menuStore/fetchmenuforEdit", async (data) => {
  console.log(data);
   
  //let newId = data.replace("?id=","")
//let newId= data.substring((data.indexOf("?filters[id]")+13),data.indexOf("&"))
console.log("new id",newId);
  let apiparam="?filters[id]="+menuId + "&populate=*"
  //let strapiId="?filters[SolutionID][$eq]=" +newId+ "?populate=*"
    const fetchData = async () => {
      return menuService.getMenuEdit(apiparam) 
    }

  
    try {
      const rawData = await fetchData();
    
      const menuData = [];
      for (const menu of rawData) {
       
        const cardData = {
          id: menu.nenuId,
          title:menu.attributes.menuName,
          description:menu.attributes.menuDescription
         
        };
        menuData.push(cardData);
      }
       
  
      
      return {
        menuforedit: menuData.length !== 0 ? menuData : [],
        loading: false,
      };
    } catch (err) {
      console.log("Error :", err);
    }
  }
  );

  //Post for About Devportal Data
  export const postAboutDevPortalData = createAsyncThunk("aboutpageStore/postAboutDevPortalData", async (devportalData) => {
               
    const postData = async () => {
      return abourdevportalService.postAboutDevPortal(devportalData) 
    }
  
    try {
      const rawData = await postData();
      console.log("Post About DevPortal data response", rawData);
      return rawData;
      
    } catch (err) {
      console.log("Error :", err);
    }
  }
  );

export const deletedevData = createAsyncThunk("detailedProductStore/deletefeaturesData", async (id) => {
         
    const deleteData = async () => {
      return abourdevportalService.deleteldevData(id) 
    }
  
    try {
      const rawData = await deleteData();
      console.log(" deletefeaturesData data response", rawData);
      return rawData;
    
    } catch (err) {
      console.log("Error :", err);
    }
    });

export const fetchAboutDevPortalDataforEdit = createAsyncThunk("aboutpageStore/fetchAboutDevPortalDataforEdit", async (data) => {
      console.log(data);
       
      let newId = data.replace("?id=","")
    //let newId= data.substring((data.indexOf("?filters[id]")+13),data.indexOf("&"))
    console.log("new id",newId);
      let apiparam="?filters[id]="+newId + "&populate=*"
      //let strapiId="?filters[SolutionID][$eq]=" +newId+ "?populate=*"
        const fetchData = async () => {
          return abourdevportalService.getAboutPageforEdit(apiparam) 
        }
    
      
        try {
          const rawData = await fetchData();
        
          const aboutDevData = [];
          for (const abtdev of rawData) {
            const cardData = {
              id: abtdev.id,
              title: abtdev.attributes.title,
              description: abtdev.attributes.description
            };
            aboutDevData.push(cardData);
          }
           
      
          console.log("About dev Portal Edit:", aboutDevData);
          return {
            aboutPageDataforEditdata: aboutDevData.length !== 0 ? aboutDevData : [],
            loading: false,
          };
        } catch (err) {
          console.log("Error :", err);
        }
      }
      );
