
import React , {useState} from 'react';
import { View , Text , Alert , StyleSheet, FlatList } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem/';
import AddItem from './components/AddItem/';

const App = () =>{

  const [items, setItems] = useState([
    {id: Math.random(), text: 'Bread'},
    {id: Math.random(), text: 'Jam'},
    {id: Math.random(), text: 'Milk'},
    {id: Math.random(), text: 'Butter'},
    {id: Math.random(), text: 'Juice'},
    {id: Math.random(), text: 'Banana'},

  ]);

const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item =>
        item.id != id);
    });
};

const addItem = (text) =>{
  if(!text){
    Alert.alert('Error', 'Please enter an item', {text: 'OK'});
  }
  else{
    setItems(prevItems =>{
      return [{id: Math.random(), text}, ...prevItems]
    });
  }
};
  

  return(
    <View style={styles.container}>
      <Header title='Shopping List'/>
      <AddItem addItem={addItem}/>
      <FlatList 
        data={items.sort((a, b) => a.text.localeCompare(b.text))}
        renderItem={({item}) =>
          <ListItem item={item}
          deleteItem={deleteItem}/>}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    paddingTop: 60,
  },

});
export default App;
