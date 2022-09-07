import { View, Text, StyleSheet, FlatList } from 'react-native'

const BasketItem = ({ basketItem }) =>
{
    return (

      <View style={styles.row}>
        <View style={styles.quantityContainer}>
          <Text>1</Text>
        </View>
      <Text style={{fontWeight: '600', }} >{basketItem.name}</Text>
      <Text style={{marginLeft: 'auto', }}>{basketItem.price}</Text>
  </View>
    )
}

const styles = StyleSheet.create(
    {
      row: 
      {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
      },
      quantityContainer:
      {
          backgroundColor: 'lightgrey',
          paddingHorizontal: 5,
          marginRight: 10,
          paddingVertical: 2,
          borderRadius: 3,
      }
    })

export default BasketItem