let nextId = 0;
const dateOptions = { day: 'numeric', month: 'long', hour: 'numeric', minute: 'numeric'};

export const addComment = (userName, comment) => {

    return {
        type: 'ADD_COMMENT',
        id: nextId++, 
        userName,
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
