import {ITodo} from '../types/Data'
interface ITodoItem extends ITodo {
    toogleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
    const {id, title, complete, toogleTodo, removeTodo} = props;

    return <div className='item'>
        <input type='checkbox' checked={complete} onChange={() => toogleTodo(id)}/>
        {title}
        <button onClick={() => removeTodo(id)}>x</button>
    </div>
}

export {TodoItem}