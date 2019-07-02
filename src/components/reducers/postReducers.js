const postReducer = (state = { isAuthenticated: false} , action ) => {
    switch(action.type) {
        case 'LOGIN':
            return {isAuthenticated:true, token:action.data};
        case 'LOGOUT':
            return {isAuthenticated:false, token:null};
        default:
            return state;
    }
}

export default postReducer;