

interface UserState {
	users: any[]
	loading: boolean
	error: null | string
}

const initialState = {
	users: [],
	loading: false,
	error: null
}

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case "FETCH_USERS""
	}
}
// ИЗМЕНЯТЬ СОСТОЯНИЯ НЕ ЧЕРЕЗ (...state, loading: true) а через (loading: true. errors: null, user: action.payload)