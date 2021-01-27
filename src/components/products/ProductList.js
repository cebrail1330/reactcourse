import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as productActions from "../../redux/actions/productActions"
import * as cartActions from "../../redux/actions/cartActions"
import {Column} from "primereact/column";
import {DataTable} from "primereact/datatable";
import {Button} from "primereact/button";
import {Link, NavLink} from "react-router-dom";


class ProductList extends Component {

    state={
        productSearch:""
    }
    componentDidMount() {
        this.props.action.getProducts();
    }

    addToCart = (product) => {
        this.props.action.addToCart({quantity:1, product})
    }
    updateProduct=(event) =>{
        console.log(event);

    }

    render() {
        /*const columns = [
            {field: 'productID', header: 'Code'},
            {field: 'name', header: 'Name'},
            {field: 'quantityPerUnit', header: 'Quantity Per Unit'},
            {field: 'unitPrice', header: 'Unit Price'},
        ];
        const dynamicColumns = columns.map((col, i) => {
            return <Column key={col.field} field={col.field} header={col.header}/>;
        }); **/

        const searchBodyTemplate = (rowData) => {
            return <Button label="Add" className="p-button-secondary" onClick={()=>this.addToCart(rowData)} />;
        }
        const updateTemplete = rowData =>{
            //return <NavLink to="updateProduct"><Button label="Update" className="p-button-secondary" onClick={()=>this.updateProduct(rowData)}/></NavLink>
        }
        return (
            <div>
                <div className="card">
                    <li>
                            <a href="#Geitost">Geitost</a>
                    </li>
                    <a href="" className="internal -link"></a>
                    <DataTable value={this.props.products} onValueChange={sortedData => console.log(sortedData)}>
                        <Column field="id" header="Code"></Column>
                        <Column field="name" header="Name" columnKey="name"></Column>
                        <Column field="quantityPerUnit" header="Quantity Per Unit"></Column>
                        <Column field="unitPrice" header="Unit Price"></Column>
                        <Column headerStyle={{width: '4rem'}} body={searchBodyTemplate}></Column>
                        <Column headerStyle={{width: '4rem'}} body={updateTemplete}></Column>

                    </DataTable>
                    <div id="Geitost">
                        lasdalkjnbsdaksjbdj
                    </div>

                </div>


            </div>
        );
    }
}

/*<DataTable value={this.props.products}>
                        {dynamicColumns}
                    </DataTable>*/
function mapStateToProps(state) {
    return {
        products: state.productListReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        action: {
            getProducts: bindActionCreators(productActions.getProduct, dispatch),
            addToCart: bindActionCreators(cartActions.addToCart, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
