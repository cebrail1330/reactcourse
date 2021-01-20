import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as productActions from "../../redux/actions/productActions"
import {Column} from "primereact/column";
import {DataTable} from "primereact/datatable";


class ProductList extends Component {

    componentDidMount() {
        this.props.action.getProducts()

    }

    render() {
        console.log(this.props.products)
        const columns = [
            {field: 'productID', header: 'Code'},
            {field: 'name', header: 'Name'},
            {field: 'quantityPerUnit', header: 'Quantity Per Unit'},
            {field: 'unitPrice', header: 'Unit Price'}
        ];
        const dynamicColumns = columns.map((col,i) => {
            return <Column key={col.field} field={col.field} header={col.header} />;
        });
        return (
            <div>
                <div className="card">
                    <DataTable value={this.props.products}>
                        {dynamicColumns}
                    </DataTable>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state){
    return {
        products: state.productListReducer
    }
}

function mapDispatchToProps(dispatch){
    return{
        action:{
            getProducts:bindActionCreators(productActions.getProduct, dispatch)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);