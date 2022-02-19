
import TodoHeader from "../todo-header/index";
import TodoList from '../todo-list/index'

function App() {
  const todos = [
    { id: 1, label: 'Drink coffee', done: false, important: false },
    { id: 2, label: 'Drink tea', done: false, important: false },
    { id: 3, label: 'Learn React', done: false, important: false },
    { id: 4, label: 'Drink vodka', done: false, important: false }
  ]

  return (
      <div className="container">
        <div className='todoList'>
          <div className="header">
            <TodoHeader/>
            <TodoList todos={todos}/>
          </div>
        </div>
      </div>
  );
}

export default App;
