import Navi from "../Navi/Navi";
import Dashboard from "./Dashboard";
import "../../index.css"
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import Cart from "../cart/Cart";
import AddProduct from "../addProduct/addProduct";
import UpdateProduct from "../updateProduct/UpdateProduct";
import {Switch, Route, BrowserRouter} from "react-router-dom"
import Category from "../categories/Category";

function App() {
  return (
    <div>
        <Navi/>

            <Switch>
           {/*     <Route path="/" exact component={Dashboard}></Route>
                <Route path="/product" exact component={Dashboard}></Route>
              */}  <Route path="/cart" exact component={Cart}></Route>
                <Route path="/addProduct" exact component={AddProduct}></Route>
                <Route path="/updateProduct" exact component={UpdateProduct}></Route>
            </Switch>

        <Category/>
    </div>
  );
}

export default App;
