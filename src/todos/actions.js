

export const CREATE_TODO = 'CREATE_TODO';
export const createTodo = text => ({
    type: CREATE_TODO,
    payload: {text}
});

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = text => ({
    type: REMOVE_TODO,
    payload: {text}
});

export const DONE_TODO = 'DONE_TODO';
export const doneTodo = text => ({
    type: DONE_TODO,
    payload: {text}
});