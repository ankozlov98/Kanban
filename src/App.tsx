import { Action } from '@reduxjs/toolkit'
import React, { Dispatch, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { TaskType } from './index'
import TasksPage from './Components/TasksPage'
import { CreateTask, CreateTaskType, DeleteTask, DeleteTaskType } from './Redux/actions'


type PropTaskType = {
    tasks: TaskType[],
    dispatch: React.Dispatch<any>,
}

const mockArray: TaskType[] = [{
    id: 1,
    title: 'Learn Redux',
    description: 'The store, actions, and reducers, oh my!',
    status: 'In Progress',
}]


const App = (props: PropTaskType) => {

    const onCreateTask = ({ title, description }: CreateTaskType) => {
        props.dispatch(CreateTask({ title, description }))
        }

    const onDeleteTask = ({ title, description, taskId, status }: DeleteTaskType) => {
            props.dispatch(DeleteTask({ title, description, taskId, status }))
            }    

    const [mock, setMock] = useState<TaskType[]>(mockArray)

    useEffect(() => {
        setMock(props.tasks)
    }, [props.tasks, onDeleteTask, onCreateTask])

    return (
        <div className='body'>
            <h1>Hello</h1>
            <TasksPage 
                tasks={mock} 
                onCreateTask={onCreateTask}
                onDeleteTask={onDeleteTask}
            />
        </div>
    )
}

function mapStateToProps(state: any) {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(App)

