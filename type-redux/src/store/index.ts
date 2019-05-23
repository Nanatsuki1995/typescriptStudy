/*
 * @Author: yuanxy 
 * @Date: 2019-05-22 21:49:13 
 * @Last Modified by:   yuanxy 
 * @Last Modified time: 2019-05-22 21:49:13 
 */

import actionTypes from './actionTypes'
class Store<T> implements IStore<T>{

    public curReducer:IReducer<T>
    public curState:any
    public listeners:Array<()=>void>
    public asyncReducers:any[]=[]
    constructor(reducer:IReducer<T>,state:any){
        this.curReducer=reducer
        this.curState=state
        this.listeners=[]
        this.dispatch=this.dispatch.bind(this)
        this.replaceReducer=this.replaceReducer.bind(this)
        
    }

    public dispatch(action:IAction){
        this.curState=this.curReducer(this.curState,action)
        this.listeners.slice().forEach(listener=>{
            listener()
        })
        return action
    }

    public getState(){
        return this.curState
    }

    public subscribe(listener:()=>void){
        this.listeners.push(listener)
        this.dispatch({type:actionTypes.INIT})
        return () => this.unSubscribe(listener);
    }

    public replaceReducer(nextReducer:IReducer<T>){
        if(typeof nextReducer !=='function'){
            throw new Error('Expected the nextReducer to be a function')
        }
        this.curReducer=nextReducer;
        this.dispatch({ type: actionTypes.REPLACE })
    }

    public unSubscribe(listener:()=>void){
        this.listeners.forEach((v,i)=>{
            if(listener===v){
                this.listeners.splice(i,1)
            }
        })
    }
}

export default Store