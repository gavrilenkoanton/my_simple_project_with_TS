import React from "react";

const RestoreState =
     ()=> {
         let state = {
             tasks: [],
             filterValue: "All"
         };
         let stateAsString = localStorage.getItem("ourState");
         if (stateAsString != null) {
             state = JSON.parse(stateAsString);
         }
       return state;

     };
 export default RestoreState;