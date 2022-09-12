import { View, Text, StyleSheet, FlatList } from 'react-native'
import dispos from '../../../../WeedmapsScraper/DispoScrape/dispoData'
import items from '../../../../WeedmapsScraper/ProductsScrape/itemData.json'
import BasketItem from '../../BasketItem'

const dispo = dispos[0]
const item = items[0]


const Basket = () => {

  return (
    <View style={styles.page}>
      <Text style={styles.name}>{dispo.dispoName}</Text>
      <Text style={{fontWeight: 'bold', marginTop: 20, fontSize: 19,}}>
          Your items
      </Text>

      <FlatList 
        data={item.items} 
        renderItem={({item}) => <BasketItem basketItem={item}/>}
      />

      <View style={styles.separator} /> 
      
      <View style={styles.button}>
        <Text style={styles.buttonText}>
          Create order
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
    width: "100%",
    paddingVertical: 40, // temporary hack
    padding: 10,
  },
  name:
  {
    fontSize: 24,
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
    marginVertical: 15,
  },
  quantity:
  {
    fontSize: 25,
    marginHorizontal: 20,
  },
  button: 
  {
    backgroundColor: 'black',
    marginTop: 'auto',
    padding: 20,
    alignItems: 'center',
  },
  buttonText:
  {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
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

export default Basket