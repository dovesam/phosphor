import React, { Component, ReactElement } from "react";

// css
import "./style.scss";

// modules

//components

// TODO - select json
import json from "../../data/sample.json"

interface AdminState {

}

class Admin extends Component<any, AdminState> {

    public render(): ReactElement {
        return (
            <div className="admin">
                Admin Panel
            </div>
        )

    }

}

export default Admin;