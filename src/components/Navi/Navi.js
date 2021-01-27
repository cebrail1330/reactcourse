import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {Button} from "primereact/button";

class Navi extends Component {


    render() {
        return (
            <div >
                    <NavLink className="p-ml-2"  to="/"><Button  label="Anasayfa" className="p-button-secondary"> </Button></NavLink>
                    <NavLink className="p-ml-2"  to="/cart" ><Button  label="Sepet" className="p-button-secondary"> </Button></NavLink>

                    <NavLink  className="p-ml-2" to="/addProduct" ><Button label="Ürün ekle" className="p-button-secondary"> </Button></NavLink>
                    <NavLink  className="p-ml-2" to="/updateProduct" ><Button label="Ürün Güncelle" className="p-button-secondary"> </Button></NavLink>





            </div>
        );
    }
}

export default Navi;
