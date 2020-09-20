import React, {useEffect, useState} from 'react';
import Header from "./components/Header";
import Content from "./components/Content";
import {connect} from "react-redux";
import {getData} from "./modules/actions";

import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

import './App.scss';
import AboutUs from "./components/AboutUs";


const App = ({data, getData}) => {
    const [state, setState] = useState([]);

    useEffect(() => {
        setState(data)
    }, [state])

    return (
        <Router>
            <div className="app">
                <Header/>
                <Route exact path="/">
                    <Content data={state}/>
                </Route>
                <Route exact path="/about-us">
                    <AboutUs/>
                </Route>
            </div>
        </Router>
    );
};

const mapStateToProps = ({modal}) => ({
    data: modal.data
});

const mapDispatchToProp = dispatch => ({
    getData: (data) => dispatch(getData(data))
});

export default connect(mapStateToProps, mapDispatchToProp)(App);
