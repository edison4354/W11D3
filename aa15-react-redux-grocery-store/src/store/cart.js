const ADD_ITEM = 'ADD_ITEM' 

export const addItem = produceId => {
    return {
        type: ADD_ITEM,
        id: produceId
    }
}


export default function cartReducer(state = {}, action) {
    const nextState = {...state}

    switch (action.type) {
        case ADD_ITEM: 
            nextState[action.id] = { id: action.id, count: 1 }
            return nextState
        default: 
            return state
    }
}