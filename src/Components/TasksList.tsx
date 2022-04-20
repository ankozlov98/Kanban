import React from 'react'
import { TaskType } from '../index'
import { ChangeTaskType } from '../Redux/actions'
import Task from './Task'



const TaskList = (props: 
    { status: string; 
        tasks: TaskType[]; 
        onDeleteTasks: ({ title, description, taskId, status }: ChangeTaskType) 
        => void;
        onChangeTask: ({ title, description, taskId, status }: ChangeTaskType) => void
     }) => {
    return (
        <div className="task­list">
            <div className="task­list­title">
                <strong>{props.status}</strong>
            </div>
            {props.tasks.map(task => ( (task.title && task.description) ?
                <Task key={task.id} task={task} status={props.status} 
                onDeleteTasks={props.onDeleteTasks} 
                onChangeTask={props.onChangeTask}
                /> : ""
            ))}
        </div>
    )
}
export default TaskList
