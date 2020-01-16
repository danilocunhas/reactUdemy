import { ADD_TODO } from '../actions'

const todoListReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            console.log('foi no redux', action.text);
            const newTodo = {
                text: action.text
            }

            return [...state, newTodo]
        default:
            return state
    }
}

export default todoListReducer;