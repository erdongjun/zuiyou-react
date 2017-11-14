import { USERINFO } from '../actions/userinfo'

const initialState = {}

function userinfo (state = initialState, action) {
    switch (action.type) {
        case USERINFO:
            return {
            	...state,
            	...action
            }
        default:
            return state
    }
}

export default  userinfo;