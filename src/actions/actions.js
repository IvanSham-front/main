function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const dateOptions = { day: 'numeric', month: 'long', hour: 'numeric', minute: 'numeric'};

export const addComment = (userName, comment) => {

    return {
        type: 'ADD_COMMENT',
        id: getRandomInt(10000), 
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
