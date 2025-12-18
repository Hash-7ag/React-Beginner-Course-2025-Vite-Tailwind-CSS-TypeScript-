import type { Todo } from "../types/todo"
import { Trash2 } from 'lucide-react';

interface TodoSummaryProps {
   todos: Todo[];
   deleteAllCompleted: () => void;
   deleteAll: () => void;
}

function TodoSummary({
   todos,
   deleteAllCompleted,
   deleteAll,
}: TodoSummaryProps) {

   const completedTodos = todos.filter(todo => todo.completed)

   return (
      <div className="flex flex-col w-full">
         <div className="text-center my-2">
            <p className="text-slate-700">
               {completedTodos.length}/{todos.length} todos completed
            </p>
         </div>
         <div className="flex justify-start items-center gap-2 sm:gap-5">
            <div className="relative group">
               <button className="
               scale-100 sm:scale-125 p-2 rounded-lg
               text-red-400 hover:text-red-500 bg-red-200 hover:bg-red-300 transition-colors duration-200
               "
               onClick={deleteAll}>
                  <Trash2 />
               </button>

                {/* Tooltip */}
               <div className="
                  absolute hidden group-hover:block 
                  bottom-full left-1/2 transform -translate-x-1/2 mb-2">
                  <div className="
                  bg-red-400 text-white font-bold text-xs px-3 py-2 rounded-xl 
                  whitespace-nowrap">
                     Delete all
                  </div>
               </div>
            </div>
            {completedTodos.length > 0 && (
               <div className="relative group">
                  <button className="
                  scale-100 sm:scale-125 p-2 rounded-lg
                  group-hover:
                  text-yellow-500 bg-yellow-200 hover:bg-yellow-300 transition-colors duration-200
                  "
                  onClick={deleteAllCompleted}>
                     <Trash2 />
                  </button>

                   {/* Tooltip */}
                  <div className="
                     absolute hidden group-hover:block 
                     bottom-full left-1/2 transform -translate-x-1/2 mb-2">
                     <div className="
                     bg-yellow-400 text-white font-bold text-xs px-3 py-2 rounded-xl 
                     whitespace-nowrap">
                        Delete all completed
                     </div>
                  </div>
               </div>
            )}
         </div>
      </div>
   )
}

export default TodoSummary
