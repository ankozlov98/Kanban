import { Action } from '@reduxjs/toolkit'
import React, { Component, useEffect, useState } from 'react'
import { TaskType } from '..'
import { CreateTaskType } from '../Redux/actions'
import TaskList from './TasksList'



const TASK_STATUSES = ['Unstarted', 'In Progress', 'Completed']


type PropTaskType = {
    tasks: TaskType[]
    onCreateTask: ({ title, description }: CreateTaskType) => void
}

type NewTaskType = {
    title: string | undefined,
    description: string | undefined
}

const TasksPage = (props: PropTaskType) => {

    const [tasksState, setTasks] = useState<TaskType[]>([])

    const [newTask, setNewTask] = useState<NewTaskType>()


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

    const onCreateTask = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        setNewTask({
            title: title,
            description: description
        })
        resetForm()

    }

    useEffect(() => {
        console.log(newTask)
    }, [onCreateTask])

    const renderTasks = () => {
        return TASK_STATUSES.map(status => {
            const statusTasks = tasksState.filter(task => task.status === status)
            return <TaskList key={status} status={status} tasks={statusTasks} />
        })

    }

    useEffect(() => {

        return () => {
            setTasks(props.tasks)
        }
    }, [props.tasks, renderTasks])






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
                <form className="task­list­form" onSubmit={onCreateTask}>
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
                        className="button"
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


export default TasksPage


