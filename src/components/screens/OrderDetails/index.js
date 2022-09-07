import { View, Text, Image, FlatList } from 'react-native'
import orders from '../../../../assets/data/orders.json'
import dispos from '../../../../assets/data/restaurants.json'
import styles from './styles'
import BasketItem from '../../BasketItem'

const order = orders[0]

const OrderDetailsHeader = () => {
  return (
    <View>
      <View style={styles.page}>
        <Image source={{uri: order.Restaurant.image}} style={styles.image} />

        <View style={styles.container}>
          <Text style={styles.title}>{order.Restaurant.name}</Text>
          <Text style={styles.subtitle}>
        {order.status} &#8226; 2 days ago
          </Text>
          <Text style={styles.menuTitle}>Your orders</Text>
        </View>
      </View>
    </View>
    
  )
}

const OrderDetails = () =>
{
    return (
        <FlatList
            ListHeaderComponenet={OrderDetailsHeader}
            data={dispos[0].dishes}
            renderItem={({ item }) => <BasketItem basketItem={item} />}
        />
    )
}

export default OrderDetails
