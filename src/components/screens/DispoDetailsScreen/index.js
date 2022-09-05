import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import dispos from '../../../../assets/data/restaurants.json'
import { Ionicons } from '@expo/vector-icons'
import MenuListItem from '../../MenuListItem'
import Header from './Header'
const dispo = dispos[0];

const DispoDetailsScreen = () => {
  return (
    <View style={styles.page}>
      <FlatList 
        ListHeaderComponent={Header}
        data={dispo.dishes}
        renderItem={({ item }) => <MenuListItem menuItem={item} />}
      />
       <Ionicons name='arrow-back-circle'
                  size={45}
                  color='white'
                  style={styles.iconContainer}
        />
    </View>
  )
}

const styles = StyleSheet.create(
{
    page:
    { 
        flex: 1,
    },
    image:
    {
        width: '100%',
        aspectRatio: 5/3,
    },
    iconContainer:
    {
      padding: 20,
      position: 'absolute',
      top: 40,
      left: 10,
    },
    title: 
    {
      fontSize: 35,
      fontWeight: '600',
      marginVertical: 10,
    },
    name: {},
    subtitle: 
    {
      fontSize: 15,
      color: '#525252',
    },
    container :
    {
      margin: 10,
    }
})

export default DispoDetailsScreen