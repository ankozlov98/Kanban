import React, { ChangeEvent, FormEventHandler } from 'react'
import { useDispatch } from 'react-redux'
import { ChangeTask, TaskType } from '../Redux/actions'
import { TASK_STATUSES } from './TasksPage'


const Task = (props: {
    task: { title: string, 
        description: string, id: number }, status: string,
    onDeleteTasks: ({ title, description, taskId, status }: TaskType) => void
    onChangeTask: ({ title, description, taskId, status }: TaskType) => void
}) => {
    
    
    const DeleteTask = () => {
        console.log(props.task.id)
        props.onDeleteTasks({
            title: props.task.title,
            description: props.task.description,
            taskId: props.task.id,
            status: props.status
        })
    }

    const changeStatus = (event: any) => {
        console.log(props.task.id)
        console.log(event.target.value)
        props.onChangeTask({
            title: props.task.title,
            description: props.task.description,
            taskId: props.task.id,
            status: event.target.value
        })
    }

    return (
        <article className="task">
            <section className="taskheader">
                <section className="text-lg font-bold underline">{props.task.title}</section>
                <select value={props.status} onChange={changeStatus}>
                    {TASK_STATUSES.map((status) => <option value={status}>{status}</option>)}
                </select>
            </section>
            <hr />
            <section className="task­body">{props.task.description}</section>
            <button onClick={DeleteTask}>Delete</button>
        </article>
    )
}
export default Task