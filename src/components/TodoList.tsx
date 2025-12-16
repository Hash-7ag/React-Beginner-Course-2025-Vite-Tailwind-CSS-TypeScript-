import type { Todo } from "../types/todo"
import TodoItem from "./TodoItem"

interface TodoListProps {
   todos: Todo[];
   onCompletedChange: (id: number, completed: boolean) => void;
   onDelete: (id: number) => void;
}

function TodoList({
   todos,
   onCompletedChange,
   onDelete
}: TodoListProps) {
   const todosSorted = todos.sort((a,b) => {
      if(a.completed === b.completed){
         return b.id - a.id
      }
      return a.completed ? 1 : -1
   })

   return (
      <>
         <div className="space-y-2 mt-5">
            {todosSorted.map(todo=> (
               <TodoItem
                  key={todo.id} 
                  todo={todo} 
                  onCompletedChange={onCompletedChange}
                  onDelete={onDelete}
               />
            ))}
         </div>
         {todos.length === 0 && (
            <p className="text-center text-slate-400 text-lg font-mono pt-2">
               No todos yet. Add a new one above.
            </p>
         )}
      </>
   )
}

export default TodoList
