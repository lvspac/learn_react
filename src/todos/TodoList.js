import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { removeTodo, markTodo } from './actions';
import {
  displayAlert, loadTodos, deleteTodo, updateTdo,
} from './thunks';
import './TodoList.css';
import styled from 'styled-components';
import {
  getTodos, getTodosAreLoading,
  getCompletedTodos, getIncompleteTodos,
} from './selectors';

const TodoList = ({
  todos = [], onRemovePressed, onMarkPressed, isLoading, onStartLoading,
}) => {
  const loading = isLoading;
  useEffect(() => {
    onStartLoading();
  }, []);

  const load = (<div>Is Loading ...</div>);
  const todoList = (
    <div className="list-wrapper">
      <NewTodoForm />
      {
            todos.map((todo) => <TodoListItem todo={todo} key={todo.id} onRemovePressed={onRemovePressed} onMarkPressed={onMarkPressed} />)
        }
    </div>
  );
  return loading ? load : todoList;
};

const mapStateToProps = (state) => ({
  isLoading: getTodos(state),
  todos: getTodosAreLoading(state),
  completedTodos: getCompletedTodos(),
  incompleteTodos: getIncompleteTodos(),

});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (id) => dispatch(deleteTodo(id)),
  onMarkPressed: (id) => dispatch(updateTdo(id)),
  onDisplayPressed: () => dispatch(displayAlert()),
  onStartLoading: () => dispatch(loadTodos()),

});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
