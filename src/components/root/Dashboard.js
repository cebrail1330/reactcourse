import React, {Component} from 'react';
import CategoryList from "../categories/CategoryList";
import ProductList from "../products/ProductList";

class Dashboard extends Component {
    render() {
        return (
            <div>
                <CategoryList/>
                <ProductList/>
            </div>
        );
    }
}

export default Dashboard;
