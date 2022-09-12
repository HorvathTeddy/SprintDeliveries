import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const MenuListItem = ({ menuItem }) => {
    const navigation = useNavigation()
  return (
    <Pressable 
        onPress={() => navigation.navigate('Menu', { id: menuItem.id })}
        style={styles.container}
    >
        <View style={{flex: 1}}>
            <Text style={styles.name} >{menuItem.dispoName}</Text>
            <Text style={styles.description} numberOfLines={2}>{menuItem.dispoStatus}</Text>
            <Text style={styles.price} >${menuItem.dispoOpenNow}</Text>
        </View>
        {menuItem.image && (<Image source={{uri: menuItem.image}} style={styles.image} />)}
    </Pressable>
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