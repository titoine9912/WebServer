import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom'

import Home from "../home/Home"
import About from "../about/About"

import "./App.css";

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <NavLink exact to="/">Accueil</NavLink>
                        <NavLink to="/about">À propos</NavLink>
                    </nav>
                    <main>
                        <Switch>
                            <Route path="/about" component={About}/>
                            <Route component={Home}/> {/* Defaults to Home */}
                        </Switch>
                    </main>
                    <footer>

                    </footer>
                </div>
            </Router>
        );
    }

}

export default App;
