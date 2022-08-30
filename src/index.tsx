import ReactDOM  from "react-dom";
import EventComponent from "./event/EventComponent";
import Parent from "./props/Parent";
import FindUser from "./refs/FindUser";
import GuestList from "./state/GuestList";
import SearchUser from "./state/SearchUser";

const App =()=>{
    return (
        <div>
          {/* <GuestList/> */}
          {/* <SearchUser /> */}
          {/* <EventComponent /> */}
          <FindUser />
        </div>
    )
}

ReactDOM.render(<App/>,document.querySelector('#root'));