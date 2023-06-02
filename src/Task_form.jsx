import {useState,useContext} from 'react'
import {TaskContext} from './context/tareaContext'

function Task_form() {
    
    const [value,setValue]=useState('')
    const [descrip,setDescription]=useState('')
    const {createTask}=useContext(TaskContext)
    const handleSubmit=(e)=>{
        e.preventDefault()
        
        createTask({
            value,
            descrip,
        })
        setValue('')
        setDescription('')
    }
  return (
    <div className='max-w-md mx-auto'>
        <form onSubmit={handleSubmit} className='bg-green-800 p-5 mb-4 rounded-md'>
            <input placeholder="new tarea" onChange={(e)=>{
                setValue(e.target.value)
            }} value={value}
            className='bg-green-900 rounded-md p-1 w-full mb-1'
            ></input>
            <textarea placeholder="new description" onChange={(e)=>{
                setDescription(e.target.value)
            }} value={descrip}
            className='bg-green-900 rounded-md p-1 w-full mb-1'></textarea>
            <button className='bg-green-900  rounded-md py-1 px-3 mb-1 text-white'>save</button>
        </form>
    </div>
  )
}

export default Task_form