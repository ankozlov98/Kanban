import { TaskType } from ".."
import { changeTaskFunctionType, createTaskFunctionType } from "./functionTypes"

export type singleTask = {
    task: {
        title: string,
        description: string, id: number
    }, status: string,
    key: string,
    // onDeleteTasks: changeTaskFunctionType
    // onChangeTask: changeTaskFunctionType
}

export type PagePropsTasksType = {
    tasks: TaskType[]
    // onCreateTask: createTaskFunctionType
    // onDeleteTask: changeTaskFunctionType
    // onChangeTask: changeTaskFunctionType
}