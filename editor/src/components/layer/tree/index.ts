interface INode{
    id:number
    title:string
    children?:INode[]
}


export class Tree{
    public data:INode
    public parent:INode
    public children:INode[]
    constructor(data:INode){
        this.data=data
        
    }

    public traserveDFS(callback:(node:INode | undefined)=>boolean){
        const currNode:INode[]=[]
        currNode.push(this.data)
        let found=false
        while(currNode.length && !found){
            const node=currNode.pop()
            if(callback(node)){
                found=true
                return 
            }
            if(node && node.children && node.children.length){
                this.parent=node
                this.children=node.children
                currNode.push(...node.children)
            }
        }
    }

    public removeNode(id:number){
        this.traserveDFS((node)=>{
            if(node && node.id===id){
                this.parent.children=this.children.filter(c=>c.id!==id)
                return true
            }
            return false
        })
    }

    public get root(){
        return this.data
    }


}