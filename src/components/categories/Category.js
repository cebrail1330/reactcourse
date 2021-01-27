import React, {Component} from 'react';
import data from "../../set";
import {InputText} from "primereact/inputtext";
import {Dropdown} from "primereact/dropdown";

class Category extends Component {
    state = {

        a: ""
    }
    onChangeHandler = (event) => {
        this.setState({a: event.target.value})
    }

    deneme() {
        const field = data.birField.subfields.filter(a => a.name === this.state.a)
        console.log(field)
        return (
            <div>
                <div className="p-fluid">
                    {field.map(a => (
                        a.elements ? a.elements.map(c => (
                                <div className="p-field  p-col-12 p-md-6">
                                    <label htmlFor="Product Name">{c.name}</label>
                                    <InputText type="text" name="name" id="name"/>
                                </div>
                            ))
                            : <div className="p-field  p-col-12 p-md-6">

                                <label htmlFor="Product Name">{a.name}</label>
                                <InputText type="text" placeholder={a.example} minLength={a.minLength} maxLength={field.maxLength} name="name"
                                           id="name"/>
                            </div>

                    ))
                    }
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                <div className="p-mb-3 p-text-normal">{data.birField.designator}</div>
                <div className="p-field dropdown-demo p-col-12 p-mt-0">
                    <label htmlFor="Category">{data.designator}</label>
                    <Dropdown options={data.birField.subfields.map(c => {
                        return c.name
                    })} onChange={this.onChangeHandler}/>
                </div>

                <div>{this.state.a && this.deneme()}</div>
            </div>
        );
    }
}

export default Category;
