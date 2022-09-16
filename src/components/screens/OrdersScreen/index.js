import { View, FlatList } from 'react-native'
import OrderListItem from '../../OrderListItem'
import { useOrderContext } from '../../../contexts/OrderContext'
const OrdersScreen = () => 
{
  const { orders } = useOrderContext()

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