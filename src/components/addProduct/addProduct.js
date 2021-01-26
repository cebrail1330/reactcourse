import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as addProductActions from "../../redux/actions/addProductActions"
import {InputText} from "primereact/inputtext";
import {Dropdown} from "primereact/dropdown";
import * as categoryActions from "../../redux/actions/categoryActions";
import "../../index.css"
import {Button} from "primereact/button";

const clearKey = (obj , keys) => {
    const newObj = {}
    Object.keys(obj).forEach(k => {
        if(!keys.includes(k)) {
            newObj[k] = obj[k];
        }
    })
    return newObj;
}

class AddProduct extends Component {
    state={
        name:null,
        quantityPerUnit:null,
        unitPrice:null,
        categoryID: null,
        categoryName: null
    }
    componentDidMount() {
        this.props.actions.getCategories()
    }
    onChangeHandler =(event)=>{
        event.preventDefault();
        const {name, value} = event.target;
        this.setState({[name]: value})
    }
    onChangeDropDown =(event)=>{
        event.preventDefault();
        this.setState({categoryID: event.target.value.id, categoryName:event.value})
    }
    onClickHandler =(event)=>{
        this.props.actions.addProduct(clearKey(this.state, ['categoryName']))
    }

    render() {
        const category= this.props.categories.map(category => ({name: category.name, id: category.categoryID}))
        return (
            <div className="card">
                <div className="">
                    <div className="p-fluid">
                        <div className="p-field  p-col-12 p-md-6">
                            <label htmlFor="Product Name">Product Name</label>
                            <InputText type="text" name="name" id="name" onChange={this.onChangeHandler}/>
                        </div>
                        <div className="p-field p-col-12 p-md-6">
                            <label htmlFor="Quantity Per Unit">Quantity Per Unit</label>
                            <InputText type="text" name="quantityPerUnit" id="quantityPerUnit" onChange={this.onChangeHandler}/>
                        </div>
                        <div className="p-field p-col-12 p-md-6">
                            <label htmlFor="Unit Price">Unit Price</label>
                            <InputText type="text" name="unitPrice" id="unitPrice" onChange={this.onChangeHandler}/>
                        </div>
                        <div className="p-field dropdown-demo p-col-12 p-md-6">
                            <label htmlFor="Category">Category</label>
                            <Dropdown  value={this.state.categoryName} options={category} name="categoryName" optionLabel="name" onChange={this.onChangeDropDown } />
                        </div>
                    </div>

                    <div>
                        <Button label="Add" className="p-button-secondary" onClick={this.onClickHandler} />
                    </div>


                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        categories: state.categoryListReducer
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: {
            addProduct: bindActionCreators(addProductActions.addProduct, dispatch),
            getCategories: bindActionCreators(categoryActions.getCategories, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);