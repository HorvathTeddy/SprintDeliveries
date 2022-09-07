import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import dispos from '../../../../assets/data/restaurants.json'
import { Ionicons } from '@expo/vector-icons'
import MenuListItem from '../../MenuListItem'
import Header from './Header'
import styles from '../OrderDetails/styles'
import { useNavigation, useRoute } from '@react-navigation/native'

const dispo = dispos[0];

const DispoDetailsScreen = () => {

  const route = useRoute()
  const navigation = useNavigation()
  // const id = route.params?.id

  return (
    <View style={styles.page}>
      <FlatList 
        ListHeaderComponent={() => <Header dispo={dispo} />}
        data={dispo.dishes}
        renderItem={({ item }) => <MenuListItem menuItem={item} />}
      />
       <Ionicons 
          onPress={() => navigation.goBack()}
          name='arrow-back-circle'
          size={45}
          color='white'
          style={styles.iconContainer}
        />
    </View>
  )
}



export default DispoDetailsScreen