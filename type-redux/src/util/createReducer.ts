

/*
 * @Author: baizn 
 * @Email: baizhanning@hiynn.com 
 * @Description: 生成单一reducers的方法
 * @Date: 2018-03-30 14:07:03 
 * @Last Modified by: yuanxy
 * @Last Modified time: 2019-05-22 22:45:18
  */

/**
 * 根据传入的action类型生成reducers
 * @param {string} type action类型
 */
export default (type:string) => {
    return (state = {}, action:IAction) => {
      if(type === action.type) {
        return action.payload
      }
      return state
    }
  }
  