import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native'
import BasketItem from '../../BasketItem'
import { useBasketContext } from '../../../contexts/BasketContext'
import { useOrderContext } from '../../../contexts/OrderContext'


const Basket = () => 
{
  const { createOrder } = useOrderContext()
  const { dispo, basketItems, totalPrice } = useBasketContext()

  return (
    <View style={styles.page}>
      <Text style={styles.name}>{dispo?.name}</Text>
      <Text style={{fontWeight: 'bold', marginTop: 20, fontSize: 19,}}>
          Your items
      </Text>

      <FlatList 
        data={basketItems} 
        renderItem={({item}) => <BasketItem basketItem={item}/>}
      />

      <View style={styles.separator} /> 
      
      <Pressable onPress={createOrder} style={styles.button}>
        <Text style={styles.buttonText}>
          Create order &#8226; ${totalPrice.toFixed(2)}
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
    fontSize: 24,
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
    marginVertical: 15,
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
  },
  quantityContainer:
  {
      backgroundColor: 'lightgrey',
      paddingHorizontal: 5,
      marginRight: 10,
      paddingVertical: 2,
      borderRadius: 3,
  }
})

export default Basket