import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import NavMenu from "./NavMenu/NavMenu";
import Monday from "./Monday/Monday";
import Tuesday from "./Tuesday/Tuesday";
import {connect} from "react-redux";
import {loadingAC} from "./redux/monday-reducer";
import Wednesday from "./Wednesday/Wednesday";
import {changeStyleAC} from "./redux/settings-reducer";

interface IProps {
    monday: object,
    loading: any
    settings: any
    changeStyle: any
}

function App(props: IProps) {
    return (
        <HashRouter>
            <div>
                <NavMenu/>
            </div>
            <Route path='/' exact render={() => <Monday monday={props.monday} loading={props.loading}/>}/>
            <Route path='/Mon' exact render={() => <Monday monday={props.monday} loading={props.loading}/>}/>
            <Route path='/Tue' exact render={() => <Tuesday/>}/>
            <Route path='/Wed' exact render={() => <Wednesday settings={props.settings} changeStyle={props.changeStyle}/>}/>
        </HashRouter>
    );
}

let mstp = (state: any) => {
    return {
        monday: state.monday,
        settings: state.settings
    }
};

let mdtp = (dispatch: any) => {
    return {
        loading: (loading: boolean) => {
            dispatch(loadingAC(loading))
        },
        changeStyle: (color: string)=>{
            dispatch(changeStyleAC(color))
        }
    }
}

export default connect(mstp, mdtp)(App);
