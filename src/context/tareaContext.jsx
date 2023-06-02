import {createContext,useState,useEffect} from 'react'
import {tasks as data} from '../Task'

export const TaskContext=createContext()
export function TareaContextProvider(props) {
  const [tasks, setTasks] = useState([])
  function createTask(task){

    setTasks([...tasks,{
        id:tasks.length,
        title:task.value,
        atdescripcion:task.descrip
      }
    ])
  }

  function Delete(Id){
    setTasks(tasks.filter(task=>task.id !== Id))
  }
  
  useEffect(()=>{
    setTasks(data)
  },[])

  return (
    <TaskContext.Provider value={{tasks,Delete,createTask}}>
      {props.children}
    </TaskContext.Provider>
  )
}
