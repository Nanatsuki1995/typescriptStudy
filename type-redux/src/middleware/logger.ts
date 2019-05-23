/*
 * @Author: yuanxy 
 * @Date: 2019-05-22 16:19:18 
 * @Last Modified by: yuanxy
 * @Last Modified time: 2019-05-22 21:48:50
 */



const logger = (store:IStore<any>) => (dispatch:any) => (action:IAction) => {
    // tslint:disable-next-line:no-console
     console.log('action', action)
    const result:any = dispatch(action)
    // tslint:disable-next-line:no-console
     console.log('next state', store.getState())
    return result
  }

  export default logger