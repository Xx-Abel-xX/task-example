import {useContext} from 'react'
import {TaskContext} from '../context/tareaContext'
function TareaComponent({task,index}) {
  const {Delete}=useContext(TaskContext)

  return (
      <div key={index} className='bg-green-800 text-white p-2 rounded-md'>
        <h1 className='text-xl font-bold capitalize'>{task.title}</h1>
        <p className='text-green-400 text-sm'>{task.atdescripcion}</p>
        <button className='bg-red-600 py-0.5 px-2  rounded-md mt-2 hover:bg-red-700' onClick={()=>{Delete(task.id)}}>
          
          delete
        </button>
      </div>
  )
}

export default TareaComponent
            