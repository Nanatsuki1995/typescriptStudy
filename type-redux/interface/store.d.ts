/*
 * @Author: yuanxy 
 * @Date: 2019-05-22 16:19:10 
 * @Last Modified by: yuanxy
 * @Last Modified time: 2019-05-22 21:56:00
 */


declare interface IStore<T>{
    curReducer:IReducer<T>
    asyncReducers:any[]
    getState():any
    dispatch(action:IAction):IAction
    subscribe(listener:()=>void):void
    unSubscribe(listener:()=>void):void
    replaceReducer(nextReducer:IReducer<T>):void
}