import React from 'react'
import { TaskType } from '../index'
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
        <article className=" bg-slate-100 border-2 border-rs w-3/12 ">
            <section className="bg-slate-300 text-center text-lg">{status}: {tasks.length || 0}</section>

            <section className='flex flex-col items-center '>
                {tasks.map(task => ((task.title && task.description) ?
                    <Task key={task.id} task={task} status={status}
                        onDeleteTasks={onDeleteTasks}
                        onChangeTask={onChangeTask}
                    /> : ""
                ))}
            </section>

        </article>
    )
}
export default TaskList
