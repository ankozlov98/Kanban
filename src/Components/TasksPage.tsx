import { Action } from '@reduxjs/toolkit'
import React, { Component, useEffect, useState } from 'react'
import { TaskType } from '..'
import { CreateTaskType, ChangeTaskType } from '../Redux/actions'
import { changeTaskFunctionType, createTaskFunctionType } from '../types/functionTypes'
import TaskList from './TasksList'



export const TASK_STATUSES = ['Unstarted', 'In Progress', 'Completed']


type PropTaskType = {
    tasks: TaskType[]
    onCreateTask: createTaskFunctionType
    onDeleteTask: changeTaskFunctionType
    onChangeTask: changeTaskFunctionType
}

type NewTaskType = {
    title: string | undefined,
    description: string | undefined
}

const TasksPage = ({ tasks, onCreateTask, onDeleteTask, onChangeTask }: PropTaskType) => {

    const [tasksState, setTasks] = useState<TaskType[]>([])


    const [visibility, setVisibility] = useState(false)

    const [title, setTitle] = useState('')

    const [description, setDescription] = useState('')

    const onTitleChange = (e: { target: { value: string } }) => {

        setTitle(e.target.value)

    }

    const onDescriptionChange = (e: { target: { value: string } }) => {
        setDescription(e.target.value)
    }


    const toggleForm = () => {
        setVisibility(!visibility)
    }

    const resetForm = () => {
        setTitle('')
        setDescription('')
    }



    const renderTasks = () => {
        return TASK_STATUSES.map(status => {
            const statusTasks = tasksState.filter(task => task.status === status)
            return <TaskList key={status} status={status} tasks={statusTasks} onDeleteTasks={onDeleteTask} onChangeTask={onChangeTask} />
        })

    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onCreateTask({ title: title, description: description })
        resetForm()
    }

    useEffect(() => {

        setTasks(tasks)
    }, [tasks])






    return (
        <div className="tasks">
            <div className="task­list­header">
                <button
                    className="button button­default"
                    onClick={toggleForm}
                >
                    + New task
                </button>
            </div>
            {visibility && (
                <form className="task­list­form" onSubmit={handleSubmit}>
                    <input
                        className="full­width­input"
                        onChange={onTitleChange}
                        value={title}
                        type="text"
                        placeholder="title"
                    />
                    <input
                        className="full­width­input"
                        onChange={onDescriptionChange}
                        value={description}
                        type="text"
                        placeholder="description"
                    />
                    <button
                        className="button border-4 border-cyan-500 backdrop-grayscale"
                        type="submit"
                    >
                        Save
                    </button>
                </form>
            )}
            <div className="tasklists">
                {
                    renderTasks()
                }
            </div>
        </div>

    )
}


export default TasksPage;


