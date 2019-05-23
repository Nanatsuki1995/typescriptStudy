const initialState = {

}


const defaultReducer = (state: any = initialState, action: IAction) => {
    switch (action.type) {
        case 'default':
            return { ...state, info: action.payload }
        default:
            return state
    }
}

export default defaultReducer