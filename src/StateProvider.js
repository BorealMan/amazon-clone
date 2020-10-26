import React, { createContext, useContext, useReducer} from "react";

// Prepares the data layer
export const StateContext = createContext();

//  Wraps our app and provide the data layer to components
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//  Pulls information from the data layer for the components
export const useStateValue = () => useContext(StateContext);