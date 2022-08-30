import { useState } from "react";

const users= [
    {id:1,name:"ali",age:38},
    {id:2,name:"sammy",age:2},
    {id:3,name:"leila",age:38},
    {id:4,name:"wasim",age:28},
    {id:5,name:"tohosif",age:30},
];

const SearchUser:React.FC =()=>{

    const [searchText,setSearchText]=useState('');
    const [user,setUser] = useState<{id:number,name:string,age:number}|undefined>();

    const searchUser=()=>{
        setSearchText('');
       let userSearch= users.find((u)=>{
            return u.name === searchText;
        });
        setUser(userSearch);
    }

    return <div>
        Search User <br/>
        <input value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
        <button onClick={searchUser} >Search User</button>
        <div>
            <h3>{user && user.id}</h3>
            <h3>{user && user.name}</h3>
            <h3>{user && user.age}</h3>
            <h3>{(!user)?"No User Found":'' } </h3>
        </div>
    </div>
}

export default SearchUser;