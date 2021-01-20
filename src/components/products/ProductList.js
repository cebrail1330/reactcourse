import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as productActions from "../../redux/actions/productActions"
import {Column} from "primereact/column";
import {DataTable} from "primereact/datatable";
import {Button} from "primereact/button";


class ProductList extends Component {

    componentDidMount() {
        this.props.action.getProducts()
    }

    DataTableButton() {
        return (
            <div>
                <React.Fragment>
                    <Button label="Add" icon="pi pi-plus" className="p-button-success p-mr-2"/>
                </React.Fragment>
            </div>
        )
    }
    DataTableButtond(rowData) {
        return (
            <div>
                    <Button label="Add" icon="pi pi-plus" className="p-button-success p-mr-2"/>
            </div>
        )
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
        });**/

        const searchBodyTemplate = () => {
            return <Button label="Add" className="p-button-secondary" />;
        }
        return (
            <div>
                <div className="card">
                    <DataTable value={this.props.products} >
                        <Column field="productID" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="quantityPerUnit" header="Quantity Per Unit"></Column>
                        <Column field="unitPrice" header="Unit Price"></Column>
                        <Column headerStyle={{ width: '4rem'}} body={searchBodyTemplate}></Column>
                        <button>kj</button>
                    </DataTable>


                </div>


            </div>
        );
    }
}

/*<DataTable value={this.props.products}>
                        {dynamicColumns}
                        <Column>zasdasdasdadsasdasc</Column>
                    </DataTable>*/
function mapStateToProps(state) {
    return {
        products: state.productListReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        action: {
            getProducts: bindActionCreators(productActions.getProduct, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
