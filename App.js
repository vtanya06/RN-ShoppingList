
import React , {useState} from 'react';
import { View , Text , Alert , StyleSheet, FlatList } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem/';
import AddItem from './components/AddItem/';

const App = () =>{

  const [items, setItems] = useState([
    {id: 1, text: 'Bread'},
    {id: 2, text: 'Jam'},
    {id: 3, text: 'Milk'},
    {id: 4, text: 'Butter'},
    {id: 5, text: 'Juice'},
    {id: 6, text: 'Banana'},

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
        data={items}
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
