import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';
import { useReducer, useRef } from 'react'; 

function reducer(state, action){
  //상태변환 코드
  switch(action.type){
    case "CREATE": {
      return [action.newItem, ...state];
    }
    case "UPDATE": {
      return state.map((it) => 
      it.id === action.targetId ? {...it, isDone: !it.isDone,} : it
      );
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.targetId);
    }
    default:
      return state;
  }
}

function App() {
  const [todo, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  // Todo 생성
  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        content,
        isDone: false,
        createdDate: new Date().getTime(),
      },
    });
    idRef.current += 1;
  };

  //Todo 체크박스 업데이트
  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId,
    });
  };

  //Todo 삭제
  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  };

  return (
    <div className='App'>
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
