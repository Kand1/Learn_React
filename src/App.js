
import './App.css';

import Header from './components/Header/Header'

import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import News from './components/News/News'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {Component} from "react";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/AppReducer";
import Preloader from "./components/common/Preloader/Preloader";


class App extends Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initializedSet) {
            return<div>
                <div>Please wait</div>
                <Preloader/>
            </div>
        }
        return (
            <BrowserRouter>
                <div className='app-wrap'>
                    <SidebarContainer/>
                    <Header/>
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
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state) => ({
    initializedSet: state.app.initializedSet
})

export default compose(
    connect(mapStateToProps, {initializeApp})
)(App)


