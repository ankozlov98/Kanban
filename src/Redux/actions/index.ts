let _id = 1

export function uniqueId() {
    return _id++
}

export type CreateTaskType = {
    title: string,
    description: string
}

export type TaskType = {
    title: string,
    description: string,
    taskId: number,
    status: string
}

export type ChangeTaskType = {
    title: string,
    description: string,
    taskId: number,
    status: string
}
export const CreateTask = ({title, description}: CreateTaskType) => {
   return ({
    type: 'CREATE_TASK',
        payload: {
            id: uniqueId(),
            title,
            description,
            status: 'Unstarted',
        }
    })
}

export const DeleteTask = ({title, description, taskId, status}: TaskType) => {
    return ({
     type: 'DELETE_TASK',
         payload: {
             id: taskId,
             title,
             description,
             status: status,
         }
     })
}

export const ChangeTask = ({title, description, taskId, status}: TaskType) => {
    console.log({title, description, taskId, status})
    return ({
        type: 'CHANGE_STATUS',
            payload: {
                id: taskId,
                title,
                description,
                status: status
            }
    })
}