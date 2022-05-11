import { Action } from '@reduxjs/toolkit'
import React, { Dispatch, useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { store, TaskType } from './index'
import TasksPage from './Components/TasksPage'
import { CreateTask, CreateTaskType, DeleteTask, ChangeTaskType, ChangeTask } from './Redux/actions'


type PropTaskType = {
    tasks: TaskType[],
    dispatch: React.Dispatch<any>,
}





const App = (props: PropTaskType) => {
    
    const dispatch = useDispatch()

    const onCreateTask = ({ title, description }: CreateTaskType) => {
        dispatch(CreateTask({ title, description }))
        }

    const onDeleteTask = ({ title, description, taskId, status }: ChangeTaskType) => {
            dispatch(DeleteTask({ title, description, taskId, status }))
            }   
    const onChangeTask = ({ title, description, taskId, status }: ChangeTaskType) => {
        dispatch(ChangeTask({ title, description, taskId, status }))
        }   

    const [mock, setMock] = useState<TaskType[]>([])

    useEffect(() => {
        setMock(store.getState().tasks)
        console.log(store.getState().tasks)
    }, [props.tasks, store
        // , onCreateTask, onDeleteTask, onChangeTask
    ])

    

    return (
        <div className='body font-sans'>
            <h1 className="my-5 text-3xl">Hello</h1>
            <TasksPage 
                tasks={mock} 
                onCreateTask={onCreateTask}
                onDeleteTask={onDeleteTask}
                onChangeTask={onChangeTask}
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


