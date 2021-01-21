import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {Button} from "primereact/button";

class Navi extends Component {


    render() {
        return (
            <div>
                <NavLink to="/"><Button label="Anasayfa" className="p-button-secondary"> </Button></NavLink>

                <NavLink to="/cart"><Button label="Sepet" className="p-button-secondary"> </Button></NavLink>

            </div>
        );
    }
}

export default Navi;
