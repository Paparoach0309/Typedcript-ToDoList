import { TodoItem } from "./Todoitem"
import { ITodo } from "../types/Data"

interface ITodoListProps {
    items: ITodo[];
    toogleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
}

const TodoList: React.FC<ITodoListProps> = (props) => {
    const {items, toogleTodo, removeTodo} = props;

    return <div>
        {
            props.items.map(todo => (
            <TodoItem
                key={todo.id}
                toogleTodo={toogleTodo}
                removeTodo={removeTodo}
                {...todo}/>))
        }
    </div>
}

export {TodoList}