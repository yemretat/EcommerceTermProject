//setup data layer

import { createContext } from "react";
import React, { useContext, useReducer } from "react";
// This is the Data Layer
export const StateContext = createContext(); // contexti oluşturduk

// Alttaki kod datayı tüm indexe gitmesini sağlamak içindir burada reducerı tüm index yani appye yolladık.Sonra da useStateValue ile datayı componenttden okuduk.
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children} {/*Buradaki children indexdeki app'yi kast ediyor */}
  </StateContext.Provider>
);
// index.jsde StateProviderdan almayı yazıyoruz.
export const useStateValue = () => useContext(StateContext);
