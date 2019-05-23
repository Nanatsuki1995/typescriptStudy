/*
 * @Author: yuanxy 
 * @Date: 2019-05-22 21:44:28 
 * @Last Modified by: yuanxy
 * @Last Modified time: 2019-05-22 22:16:46
 */


// 第一个字符不能是数字从而防止匹配到port
const paramReg = /:([^/\d][^/|$\?]+)/g



export function realUrl(key: string, data: any = {}) {

  const url = key
  const requiredURL = url.replace(
    paramReg,
    (paramName) => {
      let val = data[paramName]
      if (val === undefined) {
        val = 'null'
      }
      return global.encodeURIComponent(val)
    }
  )
  const questionMarkIndex = requiredURL.indexOf('?')
  // 如果url中没有？,则表明不需要任何拼接处理

  if (questionMarkIndex === -1) {
    return requiredURL
  }
  const optParamsStr = requiredURL.substring(questionMarkIndex + 1, requiredURL.length)
  let realOptParams = ''
  for (const item in data) {
    if (optParamsStr.indexOf(item) !== -1) {
      if (realOptParams.length === 0) {
        realOptParams += `?${item}=${global.encodeURIComponent(data[item])}`
      } else {
        realOptParams += `&${item}=${global.encodeURIComponent(data[item])}`
      }
    }
  }
  const rUrl = requiredURL.substring(0, questionMarkIndex) + realOptParams
  return rUrl
}


