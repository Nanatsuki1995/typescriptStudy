/*
 * @Author: yuanxy 
 * @Date: 2019-05-22 16:19:05 
 * @Last Modified by: yuanxy
 * @Last Modified time: 2019-05-22 21:59:21
 */
declare interface IAction {
    type: string,
    payload?: any,
    path?: string
}