import { useState } from "react"
import TodoItem from "./components/TodoItem"
import { dummyData } from "./data/todos"
import AddTodoForm from "./components/AddTodoForm";
import { ArrowBigUp, ArrowBigDown, Trash2 } from 'lucide-react';

function App() {
   const [todos, setTodos] = useState(dummyData);

   const [listWay, setlistWay] = useState(false);

   function toggleListWay(){
      return setlistWay(prev => !prev);
   }

   function clearTodo(){
      setTodos([]);
   }

   function setTodoCompleted(id: number, completed: boolean) {
      // alert(`Todo with id: ${id} is now ${completed ? "completed" : "cot completed"}`);
      setTodos((prevTodos) => 
         prevTodos.map(todo => (
            todo.id === id ? {...todo, completed} : todo
         ))
      );
   } 

   function addTodoItem(title: string){
      // console.log(title);
      const newId = todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1;

      const newTodo = {
         id: newId,
         title: title,
         completed: false
      }

      setTodos(prevTodos => 
         listWay
            ? [newTodo, ...prevTodos]
            : [...prevTodos, newTodo]
      )
   }

  return (
    <main className='py-10 h-screen'>
      <h1 className='font-bold text-3xl text-center text-slate-700 pb-4'>Your Todos</h1>
      <div className="max-w-xl mx-auto bg-slate-200 p-10 rounded-xl space-y-6">
         <div>
            <AddTodoForm todoTitle={addTodoItem}/>
         </div>
         <div className="space-y-2">
            {todos.map(todo=> (
               <TodoItem key={todo.id} todo={todo} onCompletedChange={setTodoCompleted}/>
            ))}
         </div>
      </div>
      <div className="flex flex-col gap-5 absolute top-[6.05rem] left-[61.4rem]">
         <button className="
         scale-125 p-2 rounded-lg
         text-green-600 bg-green-200 hover:bg-green-300 transition-colors duration-200
         "
         onClick={() => toggleListWay()}>
            {listWay ? <ArrowBigUp /> : <ArrowBigDown />}
         </button>
         <button className="
         scale-125 p-2 rounded-lg
         text-red-600 bg-red-200 hover:bg-red-300 transition-colors duration-200
         "
         onClick={() => clearTodo()}>
            <Trash2 />
         </button>
      </div>
    </main>
  )

}

export default App
