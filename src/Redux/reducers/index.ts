import { TaskType } from "../../index"
import { uniqueId } from "../actions"


const mockTasks: TaskType[] = [
    {
        id: uniqueId(),
        title: 'Learn Redux',
        description: 'The store, actions, and reducers, oh my!',
        status: 'In Progress',
    },
    {
        id: uniqueId(),
        title: 'Peace on Earth',
        description: 'No big deal.',
        status: 'In Progress',
    },
    {
        id: uniqueId(),
        title: 'Peace on Mars',
        description: 'No big deal.',
        status: 'Unstarted',
    },
]



export default function tasks(state = { tasks: mockTasks }, action: any ) {
    if (action.type === 'CREATE_TASK') {

        return { tasks: state.tasks.concat(action.payload) }
        }
    if (action.type === 'DELETE_TASK') {
        return { tasks: state.tasks.filter((task) => task.id !== action.payload.id) }
    }
    
    return state
}