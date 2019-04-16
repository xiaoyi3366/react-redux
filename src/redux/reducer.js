import { ADD_TODO, DELETE_TODO, ALTER_TODO } from './constants';

export const todo = (state = {}, action) => {
    switch (action.type) {
    case ADD_TODO:
        return addTodo(state, action);
    case DELETE_TODO:
        return deleteTodo(state, action);
    case ALTER_TODO:
        return alterTodo(state, action);
    default:
        return state;
    }
}

const addTodo = (state, action) => {
    const { name } = action;
    const { list = [] } = state;
    const todos = [...list];
    todos.push({
        name,
        completed: false,
        deleted: false,
    })
    return {
        ...state,
        list: todos
    }
}

const deleteTodo = (state, action) => {
    const { index } = action;
    let { list = [] } = state;
    const todos = [...list];
    todos[index] = {
        ...todos[index],
        deleted: true,
    }

    return {
        ...state,
        list: todos,
    }
}

const alterTodo = (state, action) => {
    const { index } = action;
    let { list = [] } = state;
    const todos = [...list];
    todos[index] = {
        ...todos[index],
        completed: !todos[index].completed,
    }

    return {
        ...state,
        list: todos,
    }
}