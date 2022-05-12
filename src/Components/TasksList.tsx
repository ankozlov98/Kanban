import React from 'react'
import { TaskType } from '../index'
import { ChangeTaskType } from '../Redux/actions'
import { changeTaskFunctionType } from '../types/functionTypes'
import Task from './Task'

type TaskListProps = {
    status: string;
    tasks: TaskType[];
    onDeleteTasks: changeTaskFunctionType;
    onChangeTask: changeTaskFunctionType;
}

const TaskList = (
    {
        status,
        tasks,
        onDeleteTasks,
        onChangeTask
    }: TaskListProps) => {
    return (
        <section className="border-4 border-b-black">
            <div className="task­list­title">
                <strong>{status}</strong>
            </div>
            {tasks.map(task => ((task.title && task.description) ?
                <Task key={task.id} task={task} status={status}
                    onDeleteTasks={onDeleteTasks}
                    onChangeTask={onChangeTask}
                /> : ""
            ))}
        </section>
    )
}
export default TaskList
