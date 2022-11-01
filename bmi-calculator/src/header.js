import React from "react";
import "./components.css";
class Header extends React.Component{

    constructor(){
        super();
        this.state = {}
    }

    render(){
        return (
            <nav>
                <div className="nav-bar">
                    <p className="nav-text">BMI Calculator</p>
                </div>
            </nav>
        )
    }
}



export default Header;