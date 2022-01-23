let _id = 1

export function uniqueId() {
    return _id++
}

export type CreateTaskType = {
    title: string,
    description: string
}

export type DeleteTaskType = {
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

export const DeleteTask = ({title, description, taskId, status}: DeleteTaskType) => {
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