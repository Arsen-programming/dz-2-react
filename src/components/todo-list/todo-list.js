import React from 'react';
import TodoListItem from '../todo-listitem/index';


const TodoList = ({todos}) => {
    const elements = todos.map((item) => {
        return <li className='li' key={item.id}><TodoListItem {...item} /></li>
    })
    console.log(todos)

    return(
        <div>
            <ul>
                {elements}
            </ul>
        </div>
    )
}

export default TodoList;
