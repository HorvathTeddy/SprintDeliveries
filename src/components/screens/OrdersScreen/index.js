import { View, FlatList } from 'react-native'
import OrderListItem from '../../OrderListItem'
import orders from '../../../../assets/data/orders.json'

const OrdersScreen = () => 
{
  return (
    <View style={{flex: 1, width: '100%', paddingTop: 50}}>
      <FlatList 
        data={orders} 
        renderItem={({item}) => <OrderListItem order={item}/>}
      />
    </View>
  )
}

export default OrdersScreen