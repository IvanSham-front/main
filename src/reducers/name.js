const name = (state, action) => {
    switch (action.type) {
        case 'ON_CHANGE_NAME': 
          state.name = ''
        default: 
          return state
    }
}

export default name;