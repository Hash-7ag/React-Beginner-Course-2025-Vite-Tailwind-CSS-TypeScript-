import { Trash2 } from "lucide-react";
import type { Todo } from "../types/todo"

interface TodoItemProps {
   todo: Todo;
   onCompletedChange: (id: number, completed: boolean) => void;
   onDelete: (id: number) => void;
}

function TodoItem({todo, onCompletedChange, onDelete}: TodoItemProps) {
   return (
      <div className="flex items-center gap-1 ">
         <label className="
         flex items-center gap-2 grow min-w-0
         border-2 rounded-xl border-slate-500
         py-1 px-3
         bg-white hover:bg-slate-100 hover:scale-[1.032] transition-all">
            <input 
            type="checkbox" 
            checked={todo.completed}
            onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
            className="scale-125 hover:scale-[1.35] transition-all accent-slate-500"  
            />  
            <span
            className={`line-clamp-3 break-words text-mid sm:text-xl ${
                  todo.completed
                    ? "line-through text-slate-400"
                    : "text-slate-500"
               }`}
            >{todo.title}</span> 
         </label>
         <button 
            className="p-0 md:p-2"
            onClick={() => onDelete(todo.id)}
         >
            <Trash2 size={25} className="text-slate-500 hover:text-slate-600 transition-all" /> 
         </button>
      </div>
   )
}

export default TodoItem
