/*
 * @Author: yuanxy 
 * @Date: 2019-05-22 16:19:24 
 * @Last Modified by: yuanxy
 * @Last Modified time: 2019-05-22 22:01:39
 */
/* eslint-disable */

export default {
    'test GET': {
        url: "/searchQuery/roadCongestionSearch/:curPage/:pageSize/:range/:searchKey",
        mock: {
            code: 1,
            msg: 'success',
            result: [
                {
                    title: "@cname"
                }
            ]
        }
    },
    'test2 GET': {
        url: "/searchQuery/deviceMonitor/:curPage/:pageSize/:range/:searchKey?name=&s=",
        mock: {
            code: 1,
            msg: 'success',
            result: [
                {
                    title: '@url'
                }
            ]
        }
    },
    'wbtest SOCKET':{
        url:'/',
        mock:{
            code:1,
            msg:'success',
            result:"mock测试"
        }
    }
}