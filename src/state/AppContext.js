import React, { createContext, useReducer, useContext } from 'react'
import Reducers from "./reducers"
import InitialState from "./initial"

export const StateContext = createContext()
export const StateProvider = props => (
    <StateContext.Provider value={useReducer(Reducers, InitialState)}>
        {props.children}
    </StateContext.Provider>
)

export const getState = () => useContext(StateContext);