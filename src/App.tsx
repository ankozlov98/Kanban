
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
    
    
    

    return (
        <div className=' bg-emerald-500 font-sans'>
            <h1 className="my-5 text-3xl bg-gray-900 text-white">Kanban Desk</h1>
            <TasksPage 
                tasks={tasks} 
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


