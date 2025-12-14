import TodoItem from "./components/TodoItem"
import { dummyData } from "./data/todos"

function App() {

  return (
    <main className='py-10 h-screen'>
      <h1 className='font-bold text-3xl text-center text-slate-900 pb-4'>Your Todos</h1>
      <div className="max-w-lg mx-auto bg-slate-100 p-10 rounded-xl">
         <div className="space-y-2">
            {dummyData.map(todo=> (
               <TodoItem todo={todo} />
            ))}
         </div>
      </div>
    </main>
  )

}

export default App
