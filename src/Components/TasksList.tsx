import React from 'react'
import { TaskType } from '../index'
import { ChangeTaskType } from '../Redux/actions'
import Task from './Task'

type TaskListProps = {
    status: string;
    tasks: TaskType[];
    onDeleteTasks: ({ title, description, taskId, status }: ChangeTaskType)
        => void;
    onChangeTask: ({ title, description, taskId, status }: ChangeTaskType) => void
}

const TaskList = (
    {
        status,
        tasks,
        onDeleteTasks,
        onChangeTask
    }: TaskListProps) => {
    return (
        <section className="task­list">
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
