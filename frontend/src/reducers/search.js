import { SEARCH_TASK } from '../constants'

const defaultQuery = ''

export default (state = defaultQuery, action) => {
    const { type, payload } = action
    switch (type) {
        case SEARCH_TASK:
            return payload.query
        default:
            return state
    }
}