const postReducer = (state = { isAuthenticated: false, token: null} , action ) => {
    switch(action.type) {
        case 'LOGIN':
            return {isAuthenticated:true, token:action.data};
        case 'LOGOUT':
            return { isAuthenticated: false, token: null };
        case 'JOB_DETAIL':
            return {
                ...state,
                jobDetail: action.data
            };
        default:
            return state;
    }
}

export default postReducer;