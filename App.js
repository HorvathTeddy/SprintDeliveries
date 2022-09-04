import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import DispoDetailsScreen from './src/components/screens/DispoDetailsScreen';
// import HomeScreen from './src/components/screens/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>

      <DispoDetailsScreen />
      {/* <HomeScreen /> */}

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
    // padding: 10,
    // paddingVertical: 30, // temporary hack
  }
});
