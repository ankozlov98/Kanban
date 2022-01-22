let _id = 1

export function uniqueId() {
    1
    return _id++
}

export type CreateTaskType = {
    title: string,
    description: string
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