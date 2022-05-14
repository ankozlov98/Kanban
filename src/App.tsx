
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

function mapStateToProps(state: any) {
    return {
        tasks: state.tasks
    }
}
// { tasks }: PropTaskType
const App = () => {
    return (
        <TasksPage
            // tasks={tasks}
        />

    )
}


export default connect(mapStateToProps)(App)


