
import React, {useState} from 'react';
import { View , Text ,TouchableOpacity , TextInput , StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({title, addItem}) =>{
    const [text, setText] = useState('');
    const onChange = (textVal) => setText(textVal);

    return(
    <View>
        <TextInput placeholder="ADD ITEM"
         style={styles.input} onChangeText={onChange} value={text}/>
        <TouchableOpacity style={styles.btn} onPress={() => {addItem(text);
            setText('')}}>
            <Text style={styles.btnText}>
                <Icon name="plus" size={20}/>
                ADD ITEM
            </Text>
         </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    input:{
        height: 60,
        padding: 8,
        fontSize: 16
    },
    btn:{
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 5,
    },
    btnText:{
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center'
    }
});
export default AddItem;
