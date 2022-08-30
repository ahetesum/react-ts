import React from "react";

const EventComponent:React.FC=()=>{

    const onChangeHandle=(e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target.value);
    }

    return <div>
        <input onChange={onChangeHandle} />
    </div>
}

export default EventComponent;