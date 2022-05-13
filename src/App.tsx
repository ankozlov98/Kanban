
import React, { Dispatch, useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { store, TaskType } from './index'
import TasksPage from './Components/TasksPage'
import { CreateTask, CreateTaskType, DeleteTask, ChangeTaskType, ChangeTask } from './Redux/actions'
import { Action } from '@reduxjs/toolkit'


type PropTaskType = {
    tasks: TaskType[],
    dispatch: React.Dispatch<Action>,
}





const App = ({tasks}: PropTaskType) => {
    
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
        setMock(tasks)
        console.log(tasks)
    }, [tasks, store
        // , onCreateTask, onDeleteTask, onChangeTask
    ])

    

    return (
        <div className='body bg-emerald-500 font-sans '>
            <h1 className="my-5 text-3xl bg-gray-900 text-white">Kanban Desk</h1>
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


