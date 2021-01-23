const comments = (state = [], action) => {

    
    switch (action.type) {
        case 'ADD_COMMENT': 
        return [
            ...state,
            {id: action.id, userName: action.userName, comment: action.comment, date: action.date}
        ]
        
        case 'DELETE_COMMENT':
            return state.filter(element => element.id !== action.id);
        default:
            return state    
    }
}

export default comments;