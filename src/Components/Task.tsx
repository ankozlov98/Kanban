import React, { ChangeEvent, FormEventHandler } from 'react'
import { useDispatch } from 'react-redux'
import { ChangeTask, TaskType } from '../Redux/actions'
import { TASK_STATUSES } from './TasksPage'


type singleTask = {
    task: { title: string, 
        description: string, id: number }, status: string,
    onDeleteTasks: ({ title, description, taskId, status }: TaskType) => void
    onChangeTask: ({ title, description, taskId, status }: TaskType) => void
}

const Task = ({
    task,
    status,
    onDeleteTasks,
    onChangeTask
}: singleTask) => {
    
    
    const DeleteTask = () => {
        
        onDeleteTasks({
            title: task.title,
            description: task.description,
            taskId: task.id,
            status: status
        })
    }

    const changeStatus = (event: { target: { value: string } }) => {
        console.log(task.id)
        console.log(event.target.value)
        onChangeTask({
            title: task.title,
            description: task.description,
            taskId: task.id,
            status: event.target.value
        })
    }

    return (
        <article className="task">
            <section className="taskheader">
                <section className="text-lg font-bold underline">{task.title}</section>
                <select value={status} onChange={changeStatus}>
                    {TASK_STATUSES.map((status) => <option value={status}>{status}</option>)}
                </select>
            </section>
            <hr />
            <section className="task­body">{task.description}</section>
            <button onClick={DeleteTask}>Delete</button>
        </article>
    )
}
export default Task