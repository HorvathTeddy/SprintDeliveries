import { View, Text, Image, FlatList, StyleSheet } from 'react-native'
import dispos from '../../../../assets/data/restaurants.json'
let dispo = dispos[0];

const DispoDetailsScreen = () => {
  return (
    <View style={styles.page}>
      <Image source={{uri: dispo.image}} style={styles.image} />

      <View style={styles.container}>
        <Text style={styles.title}>{dispo.name}</Text>
        <Text style={styles.subtitle}>
            $ ${dispo.deliveryFee} &#8226; {dispo.minDeliveryTime}-{dispo.maxDeliveryTime} minutes
        </Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create(
{
    page:
    { 
        flex: 1,
    },
    image:
    {
        width: '100%',
        aspectRatio: 5/3,
    },
    title: 
    {
      fontSize: 35,
      fontWeight: '600',
      marginVertical: 10,
    },
    name: {},
    subtitle: 
    {
      fontSize: 15,
      color: 'gray',
    },
    container :
    {
      margin: 10,
    }
})

export default DispoDetailsScreen