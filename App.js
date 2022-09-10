import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation';
import { StatusBar } from 'expo-status-bar';
import { Amplify } from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react-native/dist/Auth';
import config from './src/aws-exports'

Amplify.configure(config)

function App() {
  return (
    // navigation container 
    <NavigationContainer>
      <RootNavigator />
      <StatusBar style='light' />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 10,
    // paddingVertical: 30, // temporary hack
  }
});


export default withAuthenticator(App)