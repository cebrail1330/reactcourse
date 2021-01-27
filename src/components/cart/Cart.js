import React, {Component} from 'react';
import {connect} from "react-redux"
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {Button} from "primereact/button";
import {bindActionCreators} from "redux";
import * as cartActions from "../../redux/actions/cartActions"

class Cart extends Component {

    addToProduct=(product)=>{
        console.log(product.product)
        this.props.action.addToProduct(product)
    }
    removeFromCart=(product)=>{
        console.log(product.product);
        this.props.action.removeFromCart(product.product)
    }

    render() {
        /*const product = this.props.cart.map((cartItem) => (cartItem.product));
        const quantity = this.props.cart.map(cartItem =>cartItem.quantity)*/
        const searchBodyTemplate = (rowData) => {
            return (
                <div>
                    <Button label="+" className="p-button-icon" onClick={()=>this.addToProduct(rowData)} />
                    <Button label="-" className="p-button-danger" onClick={()=>this.removeFromCart(rowData)} />
                </div>

            );
        }
        return (
            <div>
                <div className="card">
                    <DataTable value={this.props.cart}>
                        <Column field="product.productID" header="Code"></Column>
                        <Column field="product.name" header="Name"></Column>
                        <Column field="product.quantityPerUnit" header="Quantity Per Unit"></Column>
                        <Column field="product.unitPrice" header="Unit Price"></Column>
                        <Column field="quantity" header="quantity"></Column>
                        <Column headerStyle={{width: '4rem'}} body={searchBodyTemplate}></Column>

                    </DataTable>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}
function mapDispatchToProps(dispatch){
    return{
        action:{
            addToProduct: bindActionCreators(cartActions.addToCart, dispatch),
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);