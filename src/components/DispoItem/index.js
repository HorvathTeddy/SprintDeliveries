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
      <Text style={styles.title}>{dispo.title}</Text>
      <Text style={styles.subtitle}>$ ${dispo.deliveryFee} {dispo.minDeliveryTime}-{dispo.maxDeliveryTime} minutes</Text>
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
  });

export default DispoItem