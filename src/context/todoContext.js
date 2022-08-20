import {createContext, useContext, useReducer} from 'react'

const initialState = {task: "", deadline: 0}
export const todoContext = createContext()
export const todoDispatcher = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_DO" :
            return {...state, task: action.payload.task, deadline: action.payload.deadline}
        default:
            return state;
    }
}

const TodoProvider = ({children}) => {
    const [todo, dispatch] = useReducer(reducer, initialState)


    return (
        <todoContext.Provider value={todo}>
            <todoDispatcher.Provider value={dispatch}>
                {children}
            </todoDispatcher.Provider>
        </todoContext.Provider>
    )
}

// HOOKS
export const useTodo = () => useContext(todoContext)
export const useTodoActions = () => useContext(todoDispatcher)


export default TodoProvider;