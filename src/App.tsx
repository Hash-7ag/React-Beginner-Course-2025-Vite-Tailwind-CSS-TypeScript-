import AddTodoForm from "./components/AddTodoForm";
// import { ArrowBigUp, ArrowBigDown } from 'lucide-react';
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import useTodos from "./hooks/useTodos";

function App() {

   const {
      todos,
      setTodoCompleted,
      addTodoItem,
      deleteTodo,
      deleteAllCompletedTodos,
      deleteAll,
   } = useTodos()

  return (
    <main className='py-10 h-screen overflow-y-auto'>
      <h1 className='font-bold text-3xl text-center text-slate-700 pb-1'>Your Todos</h1>
      <div className="max-w-xl mx-auto bg-white md:bg-slate-200 p-5 md:p-10 rounded-xl space-y-6">
         <div>
            <AddTodoForm todoTitle={addTodoItem}/>
            <TodoSummary 
               todos={todos}
               deleteAllCompleted={deleteAllCompletedTodos}
               deleteAll = {deleteAll}
            />
            <TodoList 
               todos={todos}
               onCompletedChange={setTodoCompleted}
               onDelete={deleteTodo}
            />
         </div>
      </div>
    </main>
  )

}

export default App
