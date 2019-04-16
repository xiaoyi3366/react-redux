import { ADD_TODO, DELETE_TODO, ALTER_TODO } from './constants';

export const addTodo = (name) => {
    return {
        type: ADD_TODO,
        name,
    }
}

export const deleteTodo = (index) => {
    return {
        type: DELETE_TODO,
        index,    
    }
}
export const alterTodo = (index) => {
    return {
        type: ALTER_TODO,
        index,    
    }
}