import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { CreateTask, CreateTaskType } from '../../Redux/actions'
import stylesObject from '../../Styles'


const ShortForm = () => {
    
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const onTitleChange = (e: { target: { value: string } }) => {

        setTitle(e.target.value)

    }

    const onDescriptionChange = (e: { target: { value: string } }) => {
        setDescription(e.target.value)
    }

    const onCreateTask = ({ title, description }: CreateTaskType) => {
        dispatch(CreateTask({ title, description }))
        }


    const resetForm = () => {
        setTitle('')
        setDescription('')
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onCreateTask({ title: title, description: description })
        resetForm()
    }

    console.log(stylesObject?.flexStyles?.customCenter('row'))

  return (
     <div className={stylesObject?.flexStyles?.customCenter('row') + ' h-10'}>
         <form className="task­list­form" onSubmit={handleSubmit}>
            <input 
                className="full­width­input m-2 rounded-sm placeholder:m-2 "
                onChange={onTitleChange}
                value={title}
                type="text"
                placeholder="title"
            />
            <input
                className="full­width­input rounded-sm placeholder:m-2"
                onChange={onDescriptionChange}
                value={description}
                type="text"
                placeholder="description"
            />
            <button
                className="button  bg-slate-100 m-2 rounded-sm w-24 shadow"
                type="submit"
                disabled={!(!!Boolean(title)  && !!(Boolean(description)))}
            >
                Save
            </button>
        </form>
        <button
                className="button  bg-slate-100 rounded-sm w-36 shadow"
                type="button"
            >
                More Options
            </button>
     </div>
        
    
  )
}

export default ShortForm