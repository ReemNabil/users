// const users = [
//     { id: 1, name: "Sara" },
//     { id: 2, name: "Yara" },
//     { id: 3, name: "Mohamed" },
//     { id: 4, name: "Mohamed" },
//     { id: 5, name: "Mohamed" },
//     { id: 6, name: "Mohamed" },
//     { id: 7, name: "Mohamed" },
//     { id: 9, name: "Hamada" },
//     { id: 10, name: "Hamada" },
//     { id: 11, name: "Hamada" },
//     { id: 12, name: "Hamada" },
//     { id: 23, name: "Sayed" },
// ]
export async function getUsers(){
    //fetch users
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    let data = await response.json()
    // .then((response)=>response.json())
    // .then((data)=>{
    //     console.log(data)
    //     return data
    // })
    // .catch((err)=>{
    //     console.log(err)
    // })
    return {
        type:'USERS_LIST',
        payload:data
    }
}
export async function getUserDetails(id){
    //fetch users
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    let data = await response.json()
    return {
        type:'USER_DETAILS',
        payload:data
    }
}