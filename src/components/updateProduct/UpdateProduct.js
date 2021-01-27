import React, {Component} from 'react';
import {connect} from "react-redux";
import {ListBox} from "primereact/listbox";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";


class UpdateProduct extends Component {
    state = {
        product: null
    }
    selectedCategory = (event) => {
        this.setState({product: event.value})

    }

    productForm() {
        console.log(this.state)
        return (
            <div className="">

                {this.state.product.map(item => (
                    <div className="p-fluid" key={item.id}>
                        <div className="p-field  p-col-12 p-md-6">
                            <label htmlFor="Product Name">Product Name</label>
                            <InputText type="text" name="name" id="name" placeholder={item.name}/>
                        </div>
                        <div className="p-field p-col-12 p-md-6">
                            <label htmlFor="Quantity Per Unit">Quantity Per Unit</label>
                            <InputText type="text" name="quantityPerUnit" id="quantityPerUnit"/>
                        </div>
                        <div className="p-field p-col-12 p-md-6">
                            <label htmlFor="Unit Price">Unit Price</label>
                            <InputText type="text" name="unitPrice" id="unitPrice"/>
                        </div>
                        <div className="p-field p-col-12 p-md-6">
                            <label htmlFor="Unit Price">Category</label>
                            <InputText type="text" name="unitPrice" id="unitPrice"/>
                        </div>
                    </div>
                ))}
                <div>
                    <Button label="Add" className="p-button-secondary" onClick={this.onClickHandler}/>
                </div>

            </div>
        )
    }
    render() {
        const {product} = this.state;
        const {products} = this.props;

        return (
            <div className="">
                <div className="country-item card">
                    <ListBox value={product} options={products} multiple filter optionLabel="name"
                             style={{width: '15rem'}} listStyle={{maxHeight: '450px'}}
                             onChange={this.selectedCategory}/>

                </div>
                <div>{this.state.product ? this.productForm() : ""}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.productListReducer
    }
}

export default connect(mapStateToProps)(UpdateProduct);