
interface ChildProps {
    color:string;
    onClick: ()=> void;
}

export  const Child =({color,onClick}:ChildProps)=>{
    return <div>
            <h1>From Child {color}</h1>
            <button onClick={onClick}>Click Me</button>
            </div>
}


export const ChildAsFC : React.FC<ChildProps> =({color,onClick})=>{
    return <div>
    <h1>From ChildFC {color}</h1>
    <button onClick={onClick}>Click Me</button>
    </div>
}