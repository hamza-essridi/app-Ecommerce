import { createSlice, configureStore } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';

const d = localStorage.getItem('lastViewed') != null ? JSON.parse(localStorage.getItem('lastViewed')):[];
const cartProduct = Cookies.get("cartProduct") != null ? JSON.parse(Cookies.get("cartProduct")) : [];
//const cartProduct = Cookies.get("cartProduct") || [];
const TotQte = Cookies.get("totalQte") != null ? JSON.parse(Cookies.get("totalQte")) : 0;
const TotAmount = Cookies.get("TotAmount") != null ? JSON.parse(Cookies.get("TotAmount")) : 0;
const productsSlice = createSlice({
  name: "products",
  initialState: {
    // products: [],
    products: cartProduct,
    totalQuantity: TotQte,
    // totalQuantity: 0,
    totaleAmount: TotAmount,
    // totaleAmount: 0,
   
    productsViewed :[],
    newProductsViewed :d,
    
  },
  reducers: {
   
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.products = action.payload.products;
      console.log("waw");
    },
    productAdded(state, action) {
      state.totalQuantity++;
      const newProduct = action.payload;
       const existingProduct = state.products.find((p)=> p.ProductId === newProduct.id);
      let number = parseInt(newProduct.finaleprice, 10);
      state.totaleAmount += number;

      if(!existingProduct){
        state.products.push({
          ProductId: newProduct.id,
          price: newProduct.finaleprice,
          quantity: 1,
          totalePrice: newProduct.finaleprice,
          name: newProduct.name,
          image: newProduct.image,
          urlImage: newProduct.urlImage,
        });

      }else{

        existingProduct.quantity++;
        existingProduct.totalPrice = existingProduct.totalPrice + newProduct.finaleprice;

      }
      
      Cookies.set("cartProduct",JSON.stringify(state.products) , { path: '/' }); 
      Cookies.set("totalQte",JSON.stringify(state.totalQuantity) , { path: '/' }); 
      Cookies.set("TotAmount",JSON.stringify(state.totaleAmount) , { path: '/' }); 
      //state.push(action.payload);
      console.log(state.totalQuantity);
      console.log(JSON.parse(Cookies.get("cartProduct")))
      // console.log(state.products[state.totalQuantity-1])
    },
    /////// still not complete
    removeProductFromCart(state, action) {
      const id = action.payload;
      const existingProduct = state.products.find((item) => item.ProductId === id);
      state.totalQuantity--;
      state.totaleAmount -=existingProduct.price; 
     // console.log(existingProduct);
      if (existingProduct.quantity === 1) {
        state.products = state.products.filter((item) => item.ProductId !== id);
      } else {
        existingProduct.quantity--;

      }
    },
    ///////
    productsViewAdd(state,action){
      //state.newProductsViewed = localStorage.getItem('lastViewed')
      const newId = action.payload ;

      if(!(state.newProductsViewed.includes(newId))){
        state.newProductsViewed.push(newId);
        console.log(newId);
        // console.log(state.newProductsViewed);
        localStorage.setItem('lastViewed',JSON.stringify(state.newProductsViewed.reverse()))
      }

    },
    
    
  },
});

export const productsActions = productsSlice.actions;

const store = configureStore({
  reducer: { prods: productsSlice.reducer },
});

export default store;
