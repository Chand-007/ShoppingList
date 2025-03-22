import { configureStore } from "@reduxjs/toolkit";
import  TotalArray  from "./Slices/CounterSlice";






export default configureStore({



    reducer:{
        total:TotalArray
    },



})