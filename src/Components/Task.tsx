import React, { ChangeEvent, FormEventHandler } from "react";
import { useDispatch } from "react-redux";

import stylesObject  from "../Styles";
import { singleTask } from "../types/componentProps";
import { changeTaskFunctionType } from "../types/functionTypes";

import { TASK_STATUSES } from "./TasksPage";

import {
    CreateTaskType,
    ChangeTaskType,
    CreateTask,
    DeleteTask,
    ChangeTask,
  } from "../Redux/actions";
  

const taskContainerStyle = `${stylesObject?.flexStyles?.customCenter('col')} shadow bg-gray-100 w-11/12 m-2 p-2`

const Task = ({ task, status, key }: singleTask) => {

    const dispatch = useDispatch();

    const onDeleteTask = ({
      title,
      description,
      taskId,
      status,
    }: ChangeTaskType) => {
      dispatch(DeleteTask({ title, description, taskId, status }));
    };
    
    const onChangeTask = ({
      title,
      description,
      taskId,
      status,
    }: ChangeTaskType) => {
      dispatch(ChangeTask({ title, description, taskId, status }));
    };

  const deleteTaskFunc = () => {
    onDeleteTask({
      title: task.title,
      description: task.description,
      taskId: task.id,
      status: status,
    });
  };

  const changeStatus = (event: { target: { value: string } }) => {
    onChangeTask({
      title: task.title,
      description: task.description,
      taskId: task.id,
      status: event.target.value,
    });
  };

  return (
    <article className={taskContainerStyle}>
      <section className={stylesObject?.flexStyles?.customCenter('col')}>
        <section className="text-lg font-bold underline">{task.title}</section>
        <select value={status} onChange={changeStatus}>
          {TASK_STATUSES.map((status) => (
            <option value={status}>{status}</option>
          ))}
        </select>
      </section>
      <hr />
      <section className="m-2 text-sm">{task.description}</section>
      <button onClick={deleteTaskFunc} className="bg-slate-300">Delete</button>
    </article>
  );
};
export default Task;
