
import './App.css';

import Header from './components/Header/Header'

import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import News from './components/News/News'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import {BrowserRouter, Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";


function App(props) {

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
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
