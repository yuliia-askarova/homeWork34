import { INCREMENT_COUNT, DECREMENT_COUNT, RESET } from "../Types/types"

const initialState = {
    count: 0
}

const countReducer = (state = initialState, action) => {

    switch (action.type) {
        case INCREMENT_COUNT: 
        return {...state, count: state.count += 1 }

        case DECREMENT_COUNT: 
        return {...state, count: state.count -= 1 }

        case RESET: 
        return {...state, count: 0 }

        default: return state
    }

}

export default countReducer