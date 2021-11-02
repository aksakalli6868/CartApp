import React, {useContext, useReducer} from "react";
import reducer from './reducer'

import data from './data'

const AppContext = React.createContext()

const defaultValue = {
    total:0,
    amount:0,
    cart: data
}

const AppProvider = ( { children } ) => {
    const [state, dispatch] = useReducer(reducer, defaultValue)

    const clearItems = () => {
        dispatch( { type:"CLEAR_ITEMS" })
    }
    
    return <AppContext.Provider 
    value={{
        ...state,
        clearItems,
    }}> 
        {children}
    </AppContext.Provider>
}
export const useGlobalContext = () => {
    return useContext(AppContext)
}
export {AppContext, AppProvider, }

