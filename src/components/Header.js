import React from "react";
import {NavLink} from "react-router-dom";


const Header = () => (
    <header className="headers">
        <h2>/ Header</h2>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink><br/>
        <NavLink to="/create" activeClassName="is-active">add expense</NavLink><br/>

        <NavLink to="/help" activeClassName="is-active">help</NavLink><br/>
        <h2> Header /</h2>
    </header>
)

export default Header;
