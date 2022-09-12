import { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { DataStore } from 'aws-amplify'
import {Item} from '../../../models'
import { ActivityIndicator } from 'react-native-paper'

 
const MenuDetailsScreen = () => {
  const navigation = useNavigation()
  const route = useRoute()

  const [quantity, setQuantity] = useState(1)
  const [item, setItem] = useState(null)

  const id = route.params.id

  useEffect(() => {
    DataStore.query(Item, id).then(setItem)
  })

  const onMinus = () => 
  {
    if (quantity > 1) setQuantity(quantity - 1)
  }

  const onPlus = () =>
  {
    setQuantity(quantity + 1)
  }

  const getTotal = () =>
  {
    return (menuItem.unitCost * quantity).toFixed(2)
    return (item.price * quantity).toFixed(2)
  }

  if (!item) {
    return <ActivityIndicator size='large' color='gray' />  }

  return (
    <View style={styles.page}>
      <Text style={styles.name} >{menuItem.itemName}</Text>
      <Text style={styles.description} >{menuItem.itemType}</Text>
      <Text style={styles.description} >{menuItem.thcPercentage}</Text>
      <Text style={styles.name} >{item.name}</Text>
      <Text style={styles.description} >{item.description}</Text>      <View style={styles.separator} /> 
      <View style={styles.row}>
        <AntDesign name='minuscircleo' size={60} color={'black'} onPress={onMinus} />
        <Text style={styles.quantity}>{quantity}</Text>
        <AntDesign name='pluscircleo' size={60} color={'black'} onPress={onPlus} />
      </View>

      <Pressable onPress={() => navigation.navigate('Basket')} style={styles.button}>
        <Text style={styles.buttonText}>
          Add {quantity} to basket &#8226; (${getTotal()})
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create(
{
  page:
  {
    flex: 1,
    width: "100%",
    paddingVertical: 40, // temporary hack
    padding: 10,
  },
  name:
  {
    fontSize: 30,
    fontWeight: '600',
    marginVertical: 10,
  },
  separator:
  {
    height: 1,
    backgroundColor: 'lightgrey',
    marginVertical: 10,
  },
  description:
  {
    color: 'grey',
  },
  row: 
  {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  quantity:
  {
    fontSize: 25,
    marginHorizontal: 20,
  },
  button: 
  {
    backgroundColor: 'black',
    marginTop: 'auto',
    padding: 20,
    alignItems: 'center',
  },
  buttonText:
  {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
  }
})

export default MenuDetailsScreen