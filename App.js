import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import DispoItem from './src/components/DispoItem';
import restaurants from './assets/data/restaurants.json'

export default function App() {
  return (
    <View style={styles.container}>
      <DispoItem dispo={restaurants[0]}/>
      <DispoItem dispo={restaurants[1]}/>
      <DispoItem dispo={restaurants[2]}/>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColr: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
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
