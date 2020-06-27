import React, { createContext, useState, useReducer } from 'react';
import {users as usersReducer} from '../reducers/users'
export const Context = createContext()

export const UsersProvider = ({ children }) => {
    const [state, dispatch] = useReducer(usersReducer,[])
    console.log(state)
    
    // const getUsers = ()=>{
    //     dispatch({type:'USERS_LIST',payload:users})
    // }

    return <Context.Provider value={{ state ,dispatch}}>
        {children}
    </Context.Provider>
}

