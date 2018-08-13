import React from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

export const TodoForm = (props) => (
    <View style={styles.newToDo}>
        <TextInput style={styles.todoInput} onChangeText={props.handleChange}
                   value={props.value}/>
        <TouchableOpacity style={styles.createTodo} onPress={props.handlePress}>
            <Text style={styles.buttonText}>Create</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    newToDo: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    todoInput: {
        flex: 0.6,
        borderBottomWidth: 1,
        fontSize: 20
    },
    createTodo: {
        flex: 0.3,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 20
    },
});