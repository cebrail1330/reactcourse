import React, {Component} from 'react';
import CategoryList from "../categories/CategoryList";
import ProductList from "../products/ProductList";


class Dashboard extends Component {
    render() {
        return (
            <div className="p-grid">
                <div className="p-col-3">
                    <CategoryList/>
                </div>
                <div className="p-col-9">
                    <ProductList/>
                </div>
            </div>

        );
    }
}

export default Dashboard;
