import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const MenuListItem = ({ menuItem }) => {
  return (
    <View style={styles.container}>
        <View style={{flex: 1}}>
            <Text style={styles.name} >{menuItem.name}</Text>
            <Text style={styles.description} >{menuItem.description}</Text>
            <Text style={styles.price} >${menuItem.price}</Text>
        </View>
        {menuItem.image && (<Image source={{uri: menuItem.image}} style={styles.image} />)}
    </View>
  )
}

const styles = StyleSheet.create(
{
    container:
    {
        marginVertical: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        flexDirection: 'row',
    },
    name:
    {
        fontWeight: '600',
        fontSize: 17,
        letterSpacing: 0.5,
    },
    description:
    {
        color: 'gray',
        marginVertical: 5,
    },
    price:
    {
        fontSize: 16,
    },
    image:
    {
        height: 100,
        aspectRatio: 1,
    }

}
)

export default MenuListItem