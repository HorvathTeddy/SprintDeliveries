import { useEffect, useState } from 'react'
import { StyleSheet, FlatList, View } from 'react-native';
import DispoItem from '../../DispoItem';
import { DataStore } from 'aws-amplify';
import { Dispo } from '../../../models'

export default function HomeScreen() {
  const [dispos, setDispos] = useState([])
  const fetchDispos = async () => {
    const results = await DataStore.query(Dispo)
    setDispos(results)
  }

  useEffect(() => {
    fetchDispos()
  }, [])
   
  useEffect(() => {
    // const results = await DataStore.query(Dispo)
    // setDispos(results)
    DataStore.query(Dispo).then(setDispos)
  }, [])
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
