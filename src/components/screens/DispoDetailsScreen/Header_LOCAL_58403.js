import { View, Text, Image } from 'react-native'
import styles from '../OrderDetails/styles'


const DispoHeader = ( { dispo } ) => {
  return (
    <View style={styles.page}>
      <Image source={{uri: dispo.dispoStoreFrontImg}} style={styles.image} />
      <View style={styles.iconContainer}>
      </View>
 
      <View style={styles.container}>
        <Text style={styles.title}>{dispo.dispoName}</Text>
        <Text style={styles.subtitle}>
            {/* $ ${dispo.deliveryFee} &#8226; {dispo.minDeliveryTime}-{dispo.maxDeliveryTime} minutes */}
        </Text>

        <Text style={styles.menuTitle}>Menu</Text>
      </View>
    </View>
  )
}



export default DispoHeader