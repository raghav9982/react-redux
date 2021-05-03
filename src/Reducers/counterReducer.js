const counterReducer = (state=0, actions) => {

    switch (actions.type) {
        case 'INCREEMENT' :
            state = state + 1;
            break;

        case 'DECREEMENT' :
            state = state - 1;
            break;
        default :     console.log('default actions selected');
    }

    return state;
}

export default counterReducer;