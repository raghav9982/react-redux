const isLoggedInReducer = (state=false, actions) => {

    switch (actions.type) {
        case 'LOGGEDIN' :
             state = !this.state;
             break;
        default :      console.log('Unexpected action triggered');

    }

    return state;

}

export default isLoggedInReducer;