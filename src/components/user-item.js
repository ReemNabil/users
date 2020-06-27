import React, { useContext } from 'react';
import {Left,Right,Icon,View,Text,ListItem} from 'native-base'

export default ({ item ,navigation}) => {
    console.log(navigation)
    return (
        <ListItem>
            <Left>
                <Text>
                    {item.name}
                </Text>

            </Left>
            <Right>
                <Icon  name="eye" 
                onPress={()=>{
                    navigation.navigate('details',{
                        id:item.id
                    })
                }}/>
            </Right>
        </ListItem>
    )
}