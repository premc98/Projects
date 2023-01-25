import React, {createContext, useContext, useReducer} from "react";

//prepare the data layer
export const StateContext = createContext();

//wrap the application and provide the data layer
export const StateProvoder = ({reducer, initialState, children}) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//Pull info from the data layer

export const useStateValue = () => useContext(StateContext);
