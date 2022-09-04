import { StyleSheet, FlatList, View } from 'react-native';
import DispoItem from '../../DispoItem';

import dispos from '../../../../assets/data/restaurants.json'

export default function HomeScreen() {
  return (
      <View style={styles.page}>
      <FlatList 
        data={dispos} 
        renderItem={({ item }) => <DispoItem dispo={item} />} 
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create(
{
  page:
  {
    padding: 10,
  }
});
