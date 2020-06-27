import React, { useContext, useEffect } from 'react'
import { View, Text } from 'native-base'
import { Context } from '../context/context'
import { getUserDetails } from '../actions'
const UsersDetails = ({ route }) => {
    const { state, dispatch } = useContext(Context)
    const getDetails = async ()=>{
        dispatch(await getUserDetails(route.params.id))
    }
    useEffect(() => {
        getDetails()
    }, [])
    if (state.details)
        return (
            <View>
                <Text style={{ textAlign: 'center', fontSize: 35 }}>{state.details.name}</Text>
            </View>
        )
    return (
        <Text style={{ textAlign: 'center', fontSize: 35 }}>No details</Text>
    ) 

}
export default UsersDetails;