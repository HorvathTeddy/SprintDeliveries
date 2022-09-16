import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native'
import styles from './styles'
import BasketItem from '../../BasketItem'
import {useEffect, useState} from 'react'
import { useRoute } from '@react-navigation/native'
import { useOrderContext } from '../../../contexts/OrderContext'

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
  const [order, setOrder] = useState()
  const {getOrder} = useOrderContext()
  const route = useRoute()
  const id = route.params?.id

  useEffect(() => 
  {
    getOrder(id).then(setOrder)
  }, [])

  if (!order)
  {
    return <ActivityIndicator size={'large'} color='gray' />
  }

    return (
        <FlatList
            ListHeaderComponenet={() => <OrderDetailsHeader order={order} />}
            data={order.items}
            renderItem={({ item }) => <BasketItem basketItem={item} />}
        />
    )
}

export default OrderDetails
