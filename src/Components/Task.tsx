import React, { ChangeEvent, FormEventHandler } from 'react'
import { useDispatch } from 'react-redux'
import { ChangeTask, TaskType } from '../Redux/actions'
import { singleTask } from '../types/componentProps'
import {  changeTaskFunctionType } from '../types/functionTypes'

import { TASK_STATUSES } from './TasksPage'




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
        <article className="border-2 border-gray-800 bg-stale-100 w-11/12  m-2">
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