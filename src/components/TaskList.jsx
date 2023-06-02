import TareaComponent from "./TareaComponent";
import {useContext} from 'react'
import {TaskContext} from '../context/tareaContext'

function TaskList() {
  const {tasks}=useContext(TaskContext)
  
  if(tasks.length===0){
    return <h1 className="text-white text-4xl font-bold text-center">no hay tareas</h1>;
  }
  
  return (
    <div key={tasks.lenght} className='grid grid-cols-4 gap-0.5'>
      {
        tasks.map((task,index)=>(
          <TareaComponent task={task} key={index} index={index}/>
      ))
      }
    </div>
  )
}

export default TaskList