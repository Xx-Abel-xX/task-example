import TaskList from './components/TaskList'
import Task_form from './Task_form'

function App() {
  return (
    <main className='bg-zinc-900 h-screen '>
      <div className='container mx-auto bg-green-950 p-6 rounded-md'>
      <Task_form/>
      <TaskList />
      </div>
    </main>
  )
}

export default App