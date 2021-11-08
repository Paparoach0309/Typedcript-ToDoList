import { useState, useEffect, useRef } from "react";
import { TodoList } from "./Todolist";
import { ITodo } from "../types/Data";
import '../index.css';

const App: React.FC = () => {
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState<ITodo[]>([]);

    const inputRef = useRef<HTMLInputElement>(null);

    const handlerChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value);
    }

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') 
        addTodo();
    }

    const addTodo = () => {
        if (value) {
            setTodos([...todos, {
                id: Date.now(),
                title: value,
                complete: false,
            }]) 
            setValue('')
        }
        
    }

    const removeTodo = (id: number): void => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const toogleTodo = (id: number): void => {
        setTodos(todos.map(todo => {
            if (todo.id !== id) return todo;
            return {
                ...todo,
                complete: !todo.complete
            }
        }))
    }
    
    useEffect(() => {
        if (inputRef.current) inputRef.current.focus();
    }, []);

    return <div className='container'>
        <h3>ToDoList</h3>
        <div>
            <input value={value} onChange={handlerChange} onKeyDown={handleKeyDown} ref={inputRef}/>
            <button className='buttonAdd' onClick={addTodo}>Add</button>
        </div>
        <TodoList items={todos} removeTodo={removeTodo} toogleTodo={toogleTodo}/>
    </div>
}

export {App}