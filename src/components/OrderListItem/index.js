import { View, Text, Image } from 'react-native'
const OrderListItem = ({order}) => {
  return (
    <View>
       <Image source={{uri: order.Restaurant.image}} style={{width: 100, height: 100}}></Image>
    </View>
  )
}

export default OrderListItem