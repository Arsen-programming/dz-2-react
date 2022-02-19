import React from 'react';
import TodoStatusFilter from '../todo-status-filter/index'
import TodoSearch from '../todo-search/index'

function TodoHeader() {
    return (
        <div>
            <TodoSearch />
            <TodoStatusFilter />
        </div>
    );
}


export default TodoHeader;
