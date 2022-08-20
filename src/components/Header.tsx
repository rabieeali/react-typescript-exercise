import classes from './Header.module.css'
import {useState, FC, ChangeEvent, FormEvent} from "react";
interface ITask {
    task: string,
    deadline: number
}

const Header: FC = () => {
    const [task, setTask] = useState<string>("")
    const [deadline, setDeadline] = useState<number>(0)
    const [todoList, setTodoList] = useState<ITask[]>([])


    const addTaskHandler = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        if (!task.trim().length || !deadline) {
            alert('please add a task or deadline')
        } else {
            const newTask = {task: task, deadline: deadline}
            setTodoList([...todoList, newTask])

        }
        setTask("")
        setDeadline(0)
    }

    return (
        <div className={classes.header}>
            <form onSubmit={(e: ChangeEvent<HTMLFormElement>) => addTaskHandler(e)} className={classes.form}>
                <input name="task" value={task} onChange={(event) => setTask(event.target.value)}
                       type="text" placeholder="Task ..."/>
                <input name="deadline"
                       onChange={(event) => setDeadline(+event.target.value)} type="number"
                       placeholder="Deadline ..."/>
                <button>Add Task</button>
            </form>
        </div>
    )
}

export default Header;