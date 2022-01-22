import React from 'react'
import { TaskType } from '../index'
import Task from './Task'



const TaskList = (props: { status: string; tasks: TaskType[] }) => {
    return (
        <div className="task­list">
        <div className="task­list­title">
            <strong>{props.status}</strong>
        </div>
            {props.tasks.map(task => (
                <Task key={task.id} task={task} />
            ))}
        </div>
)
}
export default TaskList
