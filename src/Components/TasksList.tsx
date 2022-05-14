import React from "react";
import { TaskType } from "../index";
import stylesObject from "../Styles";
import { changeTaskFunctionType } from "../types/functionTypes";
import Task from "./Task";

type TaskListProps = {
    key: string
  status: string;
  tasks: TaskType[];
//   onDeleteTasks: changeTaskFunctionType;
//   onChangeTask: changeTaskFunctionType;
};

const TaskList = ({
  status,
  tasks,
  key
}: TaskListProps) => {
  return (
    <article className='bg-slate-100 shadow border-rs w-3/12 m-2 '>
      <section className="bg-slate-300 text-center text-lg">
        {status}: {tasks.length || 0}
      </section>

      {!tasks.length ? (
        <section className="flex flex-col items-center justify-center  h-5/6">
          <p>No Tasks {status}</p>
        </section>
      ) : (
        <section className="flex flex-col items-center justify-center">
          {tasks.map((task) =>
            task.title && task.description ? (
              <Task
                key={String(task.id)}
                task={task}
                status={status}
              />
            ) : (
              ""
            )
          )}
        </section>
      )}
    </article>
  );
};
export default TaskList;
