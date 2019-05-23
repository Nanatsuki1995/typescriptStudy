export function saveItem(key:string,value:any){
    return localStorage.setItem(key,value)
}

export function clearItem(key:string){
    localStorage.removeItem(key)
}

export function clear(){
    localStorage.clear()
}

export function getItem(key:string){
    return localStorage.getItem(key)
}