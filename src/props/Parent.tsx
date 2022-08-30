import { Child, ChildAsFC } from "./Child"

const Parent =()=>{
    return <ChildAsFC color="BLUE" onClick={()=>{console.log("You Clicked Me")}}/>
}

export default Parent;