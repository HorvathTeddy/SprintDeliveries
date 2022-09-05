import { View, Text, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import dispos from '../../../../assets/data/restaurants.json'
const menuItem = dispos[0].dishes[0]

const MenuDetailsScreen = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.name} >{menuItem.name}</Text>
      <Text style={styles.description} >{menuItem.description}</Text>
      <View style={styles.separator} />
      <View style={styles.row}>
        <AntDesign name='minuscircleo' size={60} color={'black'} />
        <Text style={styles.quantity}>1</Text>
        <AntDesign name='pluscircleo' size={60} color={'black'} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create(
{
  page:
  {
    flex: 1,
    width: "100%",
    paddingVertical: 40, // temporary hack
    padding: 10,
  },
  name:
  {
    fontSize: 30,
    fontWeight: '600',
    marginVertical: 10,
  },
  separator:
  {
    height: 1,
    backgroundColor: 'lightgrey',
    marginVertical: 10,
  },
  description:
  {
    color: 'grey',
  },
  row: 
  {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  quantity:
  {
    fontSize: 25,
    marginHorizontal: 20,
  }
}
)

export default MenuDetailsScreen