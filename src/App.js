
import './App.css';

import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import News from './components/News/News'
import Dialogs from './components/Dialogs/Dialogs'
import Profile from './components/Profile/Profile'
import {BrowserRouter, Route} from "react-router-dom";


function App(props) {
    return (
        <BrowserRouter>
            <div className='app-wrap'>
                <Header/>
                <Nav/>
                <div className='app-wrap-content'>
                    <Route path='/dialogs' render={() => <Dialogs
                            page = {props.state.dialogsPage}
                            dispatch = {props.dispatch}/>
                    } />
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/profile' render={() => <Profile
                        page = {props.state.profilePage}
                        dispatch = {props.dispatch}
                    />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
