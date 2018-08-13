import React, {Component} from 'react';
import {StyleSheet, Text, View} from "react-native";
import {TodoForm} from "./todo-form";
import {CREATE_TODO} from "./reducers";
import {connect} from 'react-redux';


export class _ToDo extends Component {
    static defaultProps = {
      todos: []
    };

    constructor() {
        super();
        this.state = {
            newToDo: ''
        }
    }

    /*componentWillMount() {
        fetch('http://10.0.2.2:3000/todos', {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                const todo = data.map(item => item.name);
                this.setState({todo, newToDo: ''});
            })
            .catch(err => console.log(err))
    }*/

    handleChange = (text) => {
        // const {value} = e.target;
        this.setState({newToDo: text});
    };

    handlePress() {
        /*fetch('http://10.0.2.2:3000/todos', {
            method: 'POST',
            body: JSON.stringify({
                name: this.state.newToDo
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
                const todo = [...this.state.todo, data.name];
                this.setState({todo, newToDo: ''});
            })
            .catch(err => console.log(err))*/

        this.props.createTodo(this.state.newToDo);
        this.setState({newToDo: ''});


    }


    render() {
        return (
            <View style={styles.container}>
                <TodoForm
                handlePress={this.handlePress.bind(this)}
                handleChange={this.handleChange}
                value = {this.state.newToDo}
                />
                <View style={styles.todoList}>
                    {this.props.todos.map((item, i) => (
                        <Text style={styles.todoItem} key={i}>{item}</Text>))
                    }
                </View>
            </View>
        )
    }
}

const mapActionsToProps = (dispatch) => ({
    createTodo(todo) {
        dispatch({type: 'CREATE_TODO', payload: todo})
    }
});

const mapStateToProps = (state) => ({
    todos: state.todos
});

export const ToDo = connect(mapStateToProps, mapActionsToProps)(_ToDo);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    todoList: {
        marginTop: 60

    },
    todoItem: {
        fontSize: 20
    }
});