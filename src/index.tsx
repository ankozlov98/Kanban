import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App'


import './index.css'
import tasks from './Redux/reducers/index'


export type TaskType = {
    id: number, 
    title: string, 
    description: string
    status: string
}


const store = createStore(tasks)


ReactDOM.render(
    <Provider store={store}> 
        <App />
    </Provider>,

    document.getElementById('app-root'),
)