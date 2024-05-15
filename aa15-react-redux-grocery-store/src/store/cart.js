const ADD_ITEM = 'ADD_ITEM' 

export const addItem = produceId => {
    return {
        type: ADD_ITEM,
        id: produceId,
        count: 1
    }
}


export default function cartReducer(state = {}, action) {
    const nextState = {...state}

    switch (action.type) {
        case ADD_ITEM: 
            if (nextState[action.id] === action.produceId) {
                nextState[action.count] += 1
            } else {
                nextState[action.id] = action.produceId
            }
            return nextState
        default: 
            return state
    }
}