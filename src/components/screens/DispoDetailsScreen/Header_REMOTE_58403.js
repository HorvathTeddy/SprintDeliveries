import { View, Text, Image } from 'react-native'
import styles from '../OrderDetails/styles'

const DEFAULT_IMAGE = "https://images.weedmaps.com/dispensaries/000/065/137/avatar/original/1658264090-image000000.JPG?auto=format&w=96&h=96"

const DispoHeader = ( { dispo } ) => {
  return (
    <View style={styles.page}>
      <Image source={{uri: dispo.image.startsWith('https') ? dispo.image : DEFAULT_IMAGE,}} style={styles.image} />
      <View style={styles.iconContainer}>
      </View>
 
      <View style={styles.container}>
        <Text style={styles.title}>{dispo.name}</Text>
        <Text style={styles.subtitle}>
            $ ${dispo.deliveryFee} &#8226; {dispo.minDeliveryTime}-{dispo.maxDeliveryTime} minutes
        </Text>

        <Text style={styles.menuTitle}>Menu</Text>
      </View>
    </View>
  )
}



export default DispoHeader