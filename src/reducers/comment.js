const comment = (state, action) => {
    switch (action.type) {
        case 'ON_CHANGE_COMMENT': 
            return state.comment = ''
        default: 
            return state
    }    
}

export default comment;