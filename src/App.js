
import s from "./App.module.css";
import React from "react";
import {HashRouter, BrowserRouter, Route} from "react-router-dom";
import {Component} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./redux/AppReducer";

import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import LoginContainer from "./components/Login/LoginContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Sidebar from "./components/Sidebar/Sidebar";
import Preloader from "./components/common/Preloader/Preloader";

const Music = React.lazy(() => import('./components/Music/Music'));
const News = React.lazy(() => import('./components/Settings/Settings'));
const Settings = React.lazy(() => import('./components/News/News'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));



class App extends Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initializedSet) {
            return<div>
                <Preloader/>
            </div>
        }
        return (
            <HashRouter>
                <div className={s.app}>
                    <div className={s.appWrap}>
                        <Sidebar/>
                        <HeaderContainer/>
                        <div className={s.appWrapContent}>
                            <React.Suspense fallback={<Preloader/>}>
                                <Route path='/profile/:userid?' render={ () => <ProfileContainer/>}/>
                                <Route path='/dialogs' render={ () => <DialogsContainer/>}/>
                                <Route path='/users' render={ () => <UsersContainer/>}/>
                                <Route path='/music' render={() => <Music/>}/>
                                <Route path='/settings' render={() => <Settings/>}/>
                                <Route path='/news' render={() => <News/>}/>
                                <Route path='/login' render={() => <LoginContainer/>}/>
                            </React.Suspense>
                        </div>
                    </div>
                </div>
            </HashRouter>
        )
    }
}

const mapStateToProps = (state) => ({
    initializedSet: state.app.initializedSet
})

export default compose(
    connect(mapStateToProps, {initializeApp})
)(App)


