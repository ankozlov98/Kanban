import { ChangeTaskType, CreateTaskType } from "../Redux/actions"

export type changeTaskFunctionType = ({ title, description, taskId, status }: ChangeTaskType) => void
export type createTaskFunctionType = ({ title, description }: CreateTaskType) => void