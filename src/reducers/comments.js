const comments = (state = [], action) => {
    switch (action.type) {
        case 'ADD_COMMENT': 
        return [
            ...state,
            {id: action.id, name: action.name, comment: action.comment, date: action.date}
        ]

        case 'DELETE_COMMENT':
            return state.map(arr => {
                if (arr.id === action.id) {
                    return state.splice(arr.id, 1)
                }
                return arr
            })
        default:
            return state    
    }
}

export default comments;