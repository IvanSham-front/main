let nextId = 0;
const dateOptions = { day: 'numeric', month: 'long', hour: 'numeric', minute: 'numeric'};

export const addComment = (name, comment) => {
    return {
        type: 'ADD_COMMENT',
        id: nextId++, 
        name,
        comment,
        date: new Date().toLocaleString('ru', dateOptions)
    }
}

export const deleteComment = (id) => {
    return {
        type: 'DELETE_COMMENT',
        id
    }
}

export const onChangeName = (name) => {
    return {
        type: 'ON_CHANGE_NAME',
        name
    }
} 

export const onChangeComment = (comment) => {
    return {
        type: 'ON_CHANGE_COMMENT',
        comment
    }
}