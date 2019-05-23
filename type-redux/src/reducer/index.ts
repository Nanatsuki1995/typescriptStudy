/*
 * @Author: yuanxy 
 * @Date: 2019-05-22 16:19:33 
 * @Last Modified by: yuanxy
 * @Last Modified time: 2019-05-22 21:49:01
 */

const reducer=(state: any = {}, action: IAction)=>{
    switch (action.type) {
        case 'test':
            return { ...state, name: action.payload }
        default:
            return state
    }
}

export default reducer