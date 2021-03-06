import { FETCH_TASKS, NEW_TASK, DELETE_TASK } from "../actions/types"

const initialState = {
	tasks: [],
	task: {},
}

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_TASKS:
			return {
				...state,
				tasks: action.payload,
			}
		case NEW_TASK:
			return {
				...state,
				type: action.type,
				task: action.payload,
			}
		case DELETE_TASK:
			return {
				...state,
				task: action.payload,
			}
		default:
			return state
	}
}
