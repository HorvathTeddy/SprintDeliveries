import { StyleSheet, Text, View, Image } from 'react-native';


const DispoItem = ({ dispo }) =>
{
  return (
    <View style={styles.dispoContainer}>
      <Image source=
             {{ 
                 uri: dispo.image,
              }}
              style={styles.image}
      />
      <View style={styles.row}>
        <View>
            <Text style={styles.title}>{dispo.name}</Text>
            <Text style={styles.subtitle}>$ ${dispo.deliveryFee} &#8226;{dispo.minDeliveryTime}-{dispo.maxDeliveryTime} minutes</Text>
        </View>
        <View style={styles.rating}>
            <Text>{dispo.rating}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    dispoContainer:
    {
      width: '100%',
      marginVertical: 10,
    },
    image:
    {
      width: '100%',
      aspectRatio: 5/3,
      marginBottom: 5,
      
    },
    title: 
    {
      fontSize: 16,
      fontWeight: '500',
      marginVertical: 5,
    },
    subtitle: 
    {
      color: 'gray',
    },
    row: 
    {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rating:
    {
        marginLeft: 'auto',
        backgroundColor: 'lightgray',
        width: 25,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    }
  });

export default DispoItem