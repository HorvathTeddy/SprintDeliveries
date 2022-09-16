import { useState, useEffect } from 'react'
import { View, FlatList, ActivityIndicator, Pressable, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import MenuListItem from '../../MenuListItem'
import Header from './Header'
import styles from './styles'
import { useNavigation, useRoute } from '@react-navigation/native'

import { DataStore } from 'aws-amplify'
import { Dispo, Item } from '../../../models'
import { useBasketContext } from '../../../contexts/BasketContext'

const DispoDetailsScreen = () => {
  const [dispo, setDispo] = useState(null)
  const [items, setItems] = useState([])

  const route = useRoute()
  const navigation = useNavigation()
  const id = route.params?.id

  const { setDispo : setBasketDispo, basket, basketItems } = useBasketContext()
  
  useEffect(() => {
    if (!id)
    {
      return
    } 
    setBasketDispo(null)

    DataStore.query(Dispo, id).then(setDispo)

    DataStore.query(Item, (item) => item.dispoID('eq', id)).then(setItems)
  }, [id])

  useEffect(() => 
  {
    setBasketDispo(dispo)
  }, [dispo])

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
        { basket && (
        <Pressable onPress={() => navigation.navigate("Basket")} style={styles.button}>
        <Text style={styles.buttonText}>
          Open basket ({basketItems.length})
        </Text>
      </Pressable>
      )}
    </View>
  )
}



export default DispoDetailsScreen