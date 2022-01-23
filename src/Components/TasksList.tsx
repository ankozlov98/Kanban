import React from 'react'
import { TaskType } from '../index'
import { DeleteTaskType } from '../Redux/actions'
import Task from './Task'



const TaskList = (props: 
    { status: string; 
        tasks: TaskType[]; 
        onDeleteTasks: ({ title, description, taskId, status }: DeleteTaskType) 
        => void }) => {
    return (
        <div className="task­list">
            <div className="task­list­title">
                <strong>{props.status}</strong>
            </div>
            {props.tasks.map(task => ( (task.title && task.description) ?
                <Task key={task.id} task={task} status={props.status} onDeleteTasks={props.onDeleteTasks}/> : ""
            ))}
        </div>
    )
}
export default TaskList
