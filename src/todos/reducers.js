import { CREATE_TODO, REMOVE_TODO, MARK_TODO ,
    LOAD_TODOS_IN_PROGRESS,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_FAILURE,
} from './actions';
const initialState={
    data:[],
    isLoading:false
}
// export const isLoading=(state= false, action) =>{
//     const {type} = action;
//     switch(type){
//         case LOAD_TODOS_IN_PROGRESS:
//             return true;
//         case LOAD_TODOS_SUCCESS:
//         case LOAD_TODOS_FAILURE:
//             return false
//         default:
//             return state
//         }
// }

export const todos = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
    case CREATE_TODO: {
        const { todo } = payload;
        const newTodo = {
            ...todo,
            isCompleted: false,
        };
        console.log(state)
        return {
            ...state,
            data:state.todos.data.concat(newTodo)
        };
    }
    case REMOVE_TODO: {
        const { todo } = payload;
        const id= todo.id
        return {
            ...state,
            data:state.todos.data.filter(todo => todo.id != id);
        };
    }
    case MARK_TODO:{
        const { todo :todoToUpdate} = payload;
        //const todoId= todo.id
        return {
            ...state,
            data:state.todos.data.map(todo => {
                if(todo.id===todoToUpdate.id){
                    todo.isCompleted=true
                } 
        };
        });
    }
    case LOAD_TODOS_SUCCESS:{
        const {todos}=payload
        //return todos
        return {
            ...state,
            data:todos
        }
    }
    case LOAD_TODOS_IN_PROGRESS:
        {return {
            ...state,
            isLoading:true
        }}
    case LOAD_TODOS_FAILURE:{
        return {
            ...state,
            isLoading:false
        }
    }
    default:
        return state;
    }
}