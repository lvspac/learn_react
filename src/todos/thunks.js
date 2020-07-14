import {
  loadTodosInProgress, loadTodosSuccess, loadTodosFailure,
  createTodo, removeTodo, markTodo,
} from './actions';

export const displayAlert = (text) => () => {
  alert(text);
};
export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodosInProgress());
    const result = await fetch('http://localhost:8080/todos');
    const todos = await result.json();
    console.log('todos ====', todos);
    dispatch(loadTodosSuccess(todos));
  } catch (e) {
    dispatch(loadTodosFailure());
    dispatch(displayAlert(e));
  }
};

export const addTodo = (text) => async (dispatch) => {
  try {
    const body = JSON.stringify({ text });
    const response = await fetch('http://localhost:8080/todos',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body,
      });
    const todo = await response.json();
    console.log('CREATED TODO=', todo);
    dispatch(createTodo(todo));
  } catch (e) {
    dispatch(displayAlert(e));
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:8080/todos/${id}`,
      {
        method: 'DELETE',
      });
    const todo = await response.json();
    console.log('DELETED TODO=', todo);

    dispatch(removeTodo(todo));
  } catch (e) {
    dispatch(displayAlert(e));
  }
};

export const updateTdo = (id) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:8080/todos/${id}/completed`,
      {
        method: 'POST',
      });
    const todo = await response.json();
    console.log('updated TODO=', todo);

    dispatch(markTodo(todo));
  } catch (e) {
    dispatch(displayAlert(e));
  }
};
