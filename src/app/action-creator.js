export const getTodos = () => (
    dispatch => (fetch('http://10.0.2.2:3000/todos', {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        },
    })
        .then(res => res.json())
        .then(todos => dispatch({
            type: "GET_TODOS",
            payload: todos
        })))
        .catch(err => console.log(err))
);

export const createTodo = (todo) => (
    dispatch => (fetch('http://10.0.2.2:3000/todos', {
        method: 'POST',
        body: JSON.stringify({
            name: todo
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then(res => res.json())
        .then(todo => dispatch({
            type: "CREATE_TODO",
            payload: todo
        })))
);

