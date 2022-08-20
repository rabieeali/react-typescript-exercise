import {FC} from 'react'
import './App.css'
import Header from "./components/Header"
import TodoList from "./components/TodoList"

const App: FC = () => {
    return (
        <div>
            <Header/>
            <TodoList/>
        </div>
    )
}

export default App;
