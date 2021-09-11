import _ from "lodash"
import {
    CREATE_STREAM,
    SHOW_STREAMS,
    SHOW_STREAM,
    DELETE_STREAM,
    EDIT_STREAM
} from '../Actions/Actions'

const streamReducer = (state = {}, action) => {
    switch (action.type) {
        case SHOW_STREAMS:
            return { ...state, ..._.mapKeys(action.payload, 'id') }
        case SHOW_STREAM:
            return { ...state, [action.payload.id]: action.payload }
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload }
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload }
        case DELETE_STREAM:
            return _.omit( state, action.payload )
        default:
            return state
    }
}

export default streamReducer;