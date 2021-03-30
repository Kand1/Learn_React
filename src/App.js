
import './App.css';

import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import News from './components/News/News'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import Profile from './components/Profile/Profile'
import {BrowserRouter, Route} from "react-router-dom";


function App(props) {

    return (
        <BrowserRouter>
            <div className='app-wrap'>
                <Header/>
                <Sidebar/>
                <div className='app-wrap-content'>
                    <Route path='/dialogs' render={() => <DialogsContainer
                        store = {props.store}/>
                    } />
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/profile' render={() => <Profile
                        store = {props.store}
                    />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
