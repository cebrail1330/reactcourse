import Navi from "../Navi/Navi";
import Dashboard from "./Dashboard";
import "../../index.css"
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import Cart from "../cart/Cart";
import {Switch, Route, BrowserRouter} from "react-router-dom"

function App() {
  return (
    <div>
        <Navi/>

            <Switch>
                <Route path="/" exact component={Dashboard}></Route>
                <Route path="/product" exact component={Dashboard}></Route>
                <Route path="/cart" exact component={Cart}></Route>
            </Switch>


    </div>
  );
}

export default App;
