import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';
import { useState, useRef } from 'react';

function App() {
  const idRef = useRef(0);
  const [todo, setTodo] = useState([]);
  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      content,
      isDone: false,
      createdDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    idRef.current += 1;
  }

  const onUpdate = (targetId) => {
    setTodo(
      todo.map((it) => {
        if(it.id === targetId){
          return{
            ...it,
            isDone: !it.isDone,
          };
        }else{
          return it;
        }
      })
    );
  };

  return (
    <div className='App'>
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} />
    </div>
  );
}

export default App;
