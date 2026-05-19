import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';
import { useState, useRef } from 'react';
import TestComp from './component/TestComp';

function App() {
  const idRef = useRef(0);
  const [todo, setTodo] = useState([]);
  // Todo 생성
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
  //Todo 체크박스 업데이트
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
  //Todo 삭제
  const onDelete = (targetId) => {
    setTodo(todo.filter((it) => it.id !== targetId));
  };

  return (
    <div className='App'>
      <TestComp />
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
