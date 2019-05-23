

export interface IState{
    paths:string[]
}

// 模拟登录情况
const initialState:IState={
    paths:[]
}

const reducer = (state: any=initialState, action: IAction) => {
     // tslint:disable-next-line:no-console
    
    switch (action.type) {
        case "logged":
            return {...state,paths:action.payload}
        default:
            return state
    }
}

export default reducer