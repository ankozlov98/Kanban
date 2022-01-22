import { Action } from '@reduxjs/toolkit'
import React, { Dispatch, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { TaskType } from './index'
import TasksPage from './Components/TasksPage'
import { CreateTask, CreateTaskType } from './Redux/actions'


type PropTaskType = {
    tasks: TaskType[]
    dispatch: React.Dispatch<any>
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

    const [mock, setMock] = useState<TaskType[]>(mockArray)

    useEffect(() => {
        setMock(props.tasks)
    }, [props.tasks])

    console.log(props)
    return (
        <div className='body'>
            <h1>Hello</h1>
            <TasksPage 
                tasks={mock} 
                onCreateTask={onCreateTask}
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

