import React, { Component, useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { TaskType } from "..";
import {
  CreateTaskType,
  ChangeTaskType,
  CreateTask,
  DeleteTask,
  ChangeTask,
} from "../Redux/actions";
import stylesObject from "../Styles";
import { PagePropsTasksType } from "../types/componentProps";
import {
  changeTaskFunctionType,
  createTaskFunctionType,
} from "../types/functionTypes";
import ShortForm from "./Form/ShortForm";
import TaskList from "./TasksList";

export const TASK_STATUSES = ["Unstarted", "In Progress", "Completed"];

type TaskPageProps = {
  tasks: TaskType[];
};

type NewTaskType = {
  title: string | undefined;
  description: string | undefined;
};

const TasksPage = ({ tasks }: TaskPageProps) => {
 

  const [tasksState, setTasks] = useState<TaskType[]>([]);

  const renderTasks = () => {
    return TASK_STATUSES.map((status) => {
      const statusTasks = tasksState.filter((task) => task.status === status);
      return (
        <TaskList
          key={status}
          status={status}
          tasks={statusTasks}
        />
      );
    });
  };

  useEffect(() => {
    setTasks(tasks);
  }, [tasks]);

  return (
    <div className=" bg-emerald-500 font-sans h-screen">
      <h1 className="my-5 text-3xl bg-gray-900 text-white">Kanban Desk</h1>

      <div className="tasks bg-emerald-100">
        <section className={`${stylesObject?.flexStyles?.customCenter('col')} p-2`}>
            <ShortForm />
            <h6 className="italic m-2"> You Can Add You Task Here Or Customize Through More Options Mode</h6>
        </section>
        
       <div className={`${stylesObject?.flexStyles?.customCenter('row', false)}`}>
           {renderTasks()}
        </div> 
      </div>
    </div>
  );
};

function mapStateToProps(state: any) {
  return {
    tasks: state.tasks,
  };
}

export default connect(mapStateToProps)(TasksPage);
