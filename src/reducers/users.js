export function users(state = {},action){
    console.log(action)
    switch (action.type){
        case 'USERS_LIST':{
            return {...state,list:action.payload}
        }
        case 'USER_DETAILS':{
            return {...state,details:action.payload}
        }
        default:{
            return state
        } 
    }
}