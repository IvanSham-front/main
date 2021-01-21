const comments = (state = [], action) => {
    switch (action.type) {
        case 'ADD_COMMENT': 
        return [
            ...state,
            {id: action.id, userName: action.userName, comment: action.comment, date: action.date}
        ]
        
        case 'DELETE_COMMENT':
            return [
                ...state,
                state.splice(action.id, 1)
            ]
        default:
            return state    
    }
}

export default comments;