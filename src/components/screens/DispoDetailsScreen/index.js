import { useState, useEffect } from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import MenuListItem from '../../MenuListItem'
import Header from './Header'
import styles from '../OrderDetails/styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import { DataStore } from 'aws-amplify'
import { Dispo } from '../../../models'

const DispoDetailsScreen = () => {
  const [dispo, setDispo] = useState(null)

  const route = useRoute()
  const navigation = useNavigation()
  const id = route.params?.id
  
  useEffect(() => {
    DataStore.query(Dispo, id).then(setDispo)
  }, [])

  if (!dispo) 
  {
    return <ActivityIndicator size={'large'} color='gray' />
  }

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