import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import DispoDetailsScreen from './src/components/screens/DispoDetailsScreen';
import HomeScreen from './src/components/screens/HomeScreen';
import MenuDetailsScreen from './src/components/screens/MenuDetaisScreen'

export default function App() {
  return (
    <View style={styles.container}>

      {/* <DispoDetailsScreen /> */}
      {/* <HomeScreen /> */}
      <MenuDetailsScreen />

      <StatusBar style='light' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColr: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 10,
    // paddingVertical: 30, // temporary hack
  }
});
