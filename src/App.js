
import './App.css';

import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import News from './components/News/News'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import {HashRouter, BrowserRouter, Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {Component} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./redux/AppReducer";
import Preloader from "./components/common/Preloader/Preloader";
import HeaderContainer from "./components/Header/HeaderContainer";
import Sidebar from "./components/Sidebar/Sidebar";


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
                <div className='app'>
                    <div className='app-wrap'>
                        <Sidebar/>
                        <HeaderContainer/>
                        <div className='app-wrap-content'>
                            <Route path='/profile/:userid?' render={() => <ProfileContainer/>}/>
                            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                            <Route path='/music' render={() => <Music/>}/>
                            <Route path='/settings' render={() => <Settings/>}/>
                            <Route path='/news' render={() => <News/>}/>
                            <Route path='/users' render={() => <UsersContainer/>}/>
                            <Route path='/login' render={() => <LoginContainer/>}/>
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


