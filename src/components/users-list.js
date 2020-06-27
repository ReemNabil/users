import React, { useContext, useEffect } from 'react'
import { View, Text, Header} from 'native-base'
import { Context } from '../context/context'
import { FlatList } from 'react-native'
import UserItem from './user-item'
import ListHeader from './list-header'
import {getUsers} from '../actions'

const UsersList = ({navigation}) => {
    const { state ,dispatch} = useContext(Context)
    console.log(state)
    useEffect(async ()=>{
        dispatch(await getUsers())
    },[])
    console.log(state)
    return (
        <View>
            <FlatList
                data={state.list||[]}
                renderItem={(props)=>(<UserItem {...props} navigation={navigation} />)}
                ListHeaderComponent={ListHeader}
                ListEmptyComponent = {()=><Text>NoUsers</Text>}
                keyExtractor={(item) => {
                    return (item.id + item.name + Math.random()).toString()
                }}
            />
        </View>
    )
}
export default UsersList;