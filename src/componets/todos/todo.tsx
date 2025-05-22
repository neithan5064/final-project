import { todoProps} from "@/types";
import ChangeTodo from "./changeTodo";


const Todo = ({ todo }: { todo: todoProps }) => {
    return (
        <div  className="w-10/12 auto flex item-center justify-between bg-slate-900 py-4 px-20 rounded-2xl"
        >
        
        <ChangeTodo todo={todo} />
         <span className="text-center font-bold uppercase grow">{todo.title}</span>
        </div>
        
);
    };

    export default Todo;