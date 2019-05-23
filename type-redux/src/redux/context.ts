/*
 * @Author: yuanxy 
 * @Date: 2019-05-22 16:19:38 
 * @Last Modified by:   yuanxy 
 * @Last Modified time: 2019-05-22 16:19:38 
 */

import * as React from 'react'



interface IContextProps {
    state: any
    dispatch: ({ type, path, payload }: { type: string, path?: string, payload?: any }) => void
    container:any
}



const context = React.createContext<IContextProps>({} as IContextProps)
export default context