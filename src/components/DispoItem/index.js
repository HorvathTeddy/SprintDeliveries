import { StyleSheet, Text, View, Image } from 'react-native';

const DispoItem = () =>
{
  return (
    <View style={styles.dispoContainer}>
      <Image source=
             {{ 
               uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg',
              }}
              style={styles.image}
              />
      <Text style={styles.title}>El Cabo Coffe Bar Tres De Mayo</Text>
      <Text style={styles.subtitle}>1.40 15-30 minutes</Text>
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