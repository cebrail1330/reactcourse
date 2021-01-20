import React, {Component} from 'react';
import {connect} from "react-redux"
import {bindActionCreators} from "redux";
import * as categoryActions from "../../redux/actions/categoryActions"
import {ListBox} from "primereact/listbox";


class CategoryList extends Component {

    componentDidMount() {
        this.props.actions.getCategories()
    }

    selectCategory = (category)=>{
        this.props.actions.changeCategory(category)
    }

    render() {
        const category = this.props.categories.map(category => ({name: category.name}))
        return (
            <div className="card">
                <ListBox  options={category} value={category} onChange={(e) => this.selectCategory(e.value)}  optionLabel="name" style={{width: '15rem'}} />
                <h5>Seçili kategori: {this.props.currentCategory.name}</h5>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        categories: state.categoryListReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {

        actions: {
            getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
            changeCategory: bindActionCreators(categoryActions.changeCategory, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
