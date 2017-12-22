const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        case 'REMOVE_TODO':
            let index = -1;
            for (i = 0; i < state.length; i++) {
                if (state[i].id === action.id) {
                    index = i;
                }
            }
            let newState;
            if (index <= 0) {
                newState = [];
            } else {
                newState = state;
                newState.splice(index, 1);
            }
            return (
                newState
            )
        default:
            return state
    }
}

export default todos