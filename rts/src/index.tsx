import  ReactDOM from "react-dom";
//import GuestList from "./props/state/GuestList";
import UserSearch from "./props/state/UserSearch"

const App = () => {
  return ( <div>
    <UserSearch/>
  </div> );
};

ReactDOM.render( <App />, document.querySelector("#root"));