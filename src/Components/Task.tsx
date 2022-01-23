import React from 'react'
import { DeleteTaskType } from '../Redux/actions'


const Task = (props: { task: { title: string, description: string, id: number }, status: string, key: number, 
    onDeleteTasks: ({ title, description, taskId, status }: DeleteTaskType) => void }) => {
    const DeleteTask = () => {
        console.log(props.task.id)
        props.onDeleteTasks({
            title: props.task.title,
            description: props.task.description,
            taskId: props.task.id,
            status: props.status
        })
    }

    return (
        <div className="task">
            <div className="task­header">
                <div>{props.task.title}
            </div> 
        </div>
        <hr />
        <div className="task­body">{props.task.description}</div>
        <button onClick={DeleteTask}>Delete</button>
        </div>
        )
}
export default Task