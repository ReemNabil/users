import React from 'react'
import {} from 'native-base';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import UsersList from './src/components/users-list';
import UsersDetails from './src/components/user-details';
const Stack = createStackNavigator() 
import {UsersProvider} from './src/context/context';

const UsersNavigation = ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                name="users"
                options={{
                    title:'Home'
                }}
                component={UsersList}
                />
                <Stack.Screen 
                name="details"
                options={{
                    title:'userDetails'
                }}
                component={UsersDetails}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default ()=>{
    return (
        <UsersProvider>
            <UsersNavigation>

            </UsersNavigation>
        </UsersProvider>
    )
}