const ADD_ITEM = 'ADD_ITEM' 
const REMOVE_ITEM = 'REMOVE_ITEM'
const COUNT_ITEM = 'COUNT_ITEM'

export const addItem = produceId => {
    return {
        type: ADD_ITEM,
        id: produceId
    }
}

export const removeItem = produceId => {
    return {
        type: REMOVE_ITEM,
        produceId,
    }
}

export const countItem = (produceId, count) =>{
    return {
        type: COUNT_ITEM,
        id: produceId,
        count
    }
}


export default function cartReducer(state = {}, action) {
    const nextState = {...state}

    switch (action.type) {
        case ADD_ITEM: 
            nextState[action.id] = { id: action.id, count: 1 };
            return nextState;
        case REMOVE_ITEM:
            delete nextState[action.produceId];
            return nextState;
        case COUNT_ITEM:
            nextState[action.id].count+=action.count;
            return nextState;
        default: 
            return state
    }
}