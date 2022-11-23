import React from "react";
import {Link} from "react-router-dom";
import firebase from "../firebase/config";

export default class Navbar extends React.Component{

    render(){
        return(
            <nav className="navbar navbar-expand-sm navbar navar-dark bg-dark">
                <div className="container">
                    <Link className="nabar-brand" to="/">TrulyImages</Link>
                    <button className="navbar-toggler" type="button"
                    data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-aria-expanded="false" aria-label="Toggle">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="upload">Upload</Link>
                            </li>
                        </ul>
                        <span className="navbar-text" onClick={() => {
                            localStorage.removeItem("user_id");
                            firebase.auth().signOut()
                        }}
                        >
                            Signout
                        </span>
                    </div>
                </div>
            </nav>
        )
    }


}