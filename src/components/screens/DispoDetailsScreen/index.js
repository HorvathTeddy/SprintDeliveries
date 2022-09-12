import { useState, useEffect } from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import MenuListItem from '../../MenuListItem'
import Header from './Header'
import styles from '../OrderDetails/styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import { DataStore } from 'aws-amplify'
import { Dispo, Item } from '../../../models'

const DispoDetailsScreen = () => {
  const [dispo, setDispo] = useState(null)
  const [items, setItems] = useState([])

  const route = useRoute()
  const navigation = useNavigation()
  const id = route.params?.id
  
  useEffect(() => {
    DataStore.query(Dispo, id).then(setDispo)

    DataStore.query(Item, (item) => item.dispoID('eq', id)).then(setItems)
  }, [])

  if (!dispo) 
  {
    return <ActivityIndicator size={'large'} color='gray' />
  }

  return (
    <View style={styles.page}>
      <FlatList 
        ListHeaderComponent={() => <Header dispo={dispo} />}
        data={items}
        renderItem={({ item }) => <MenuListItem menuItem={item} />}
        keyExtractor={(item) => item.name}
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