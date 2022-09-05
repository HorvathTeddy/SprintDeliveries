import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import styles from './styles'


const DispoHeader = ( { dispo } ) => {
  return (
    <View style={styles.page}>
      <Image source={{uri: dispo.image}} style={styles.image} />
      <View style={styles.iconContainer}>
      </View>
 
      <View style={styles.container}>
        <Text style={styles.title}>{dispo.name}</Text>
        <Text style={styles.subtitle}>
            $ ${dispo.deliveryFee} &#8226; {dispo.minDeliveryTime}-{dispo.maxDeliveryTime} minutes
        </Text>

        <Text style={styles.menuTitle}></Text>
      </View>
    </View>
  )
}



export default DispoHeader