import { useAuthState} from 'react-firebase-hooks/auth';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import {THSthlm } from './components/THSthlm';
import {NFSthlm } from './components/NFSthlm';
import {MDSthlm } from './components/MDSthlm';
import {BFSthlm } from './components/BFSthlm';
import {KNSthlm } from './components/KNSthlm';
import {OvrigtSthlm } from './components/OvrigtSthlm';

import {THGtbg } from './components/THGtbg';
import {NFGtbg } from './components/NFGtbg';
import {MDGtbg } from './components/MDGtbg';
import {BFGtbg } from './components/BFGtbg';
import {KNGtbg } from './components/KNGtbg';
import {OvrigtGtbg } from './components/OvrigtGtbg';

import {THMlmo } from './components/THMlmo';
import {NFMlmo } from './components/NFMlmo';
import {MDMlmo } from './components/MDMlmo';
import {BFMlmo } from './components/BFMlmo';
import {KNMlmo } from './components/KNMlmo';
import {OvrigtMlmo } from './components/OvrigtMlmo';

import { Act2 } from './components/Act2';
import { Act3 } from './components/Act3';
import { Act4 } from './components/Act4';
import { Act5 } from './components/Act5';
import { Act6 } from './components/Act6';
import SignIn from './components/SignIn';
import { auth } from './firebase.js'
import { LandingPage } from './components/LandingPage'
import { Settings } from './components/Settings'
import { CategoryGridSTHLM } from './components/CategoryGridSTHLM'
import { CategoryGridGTBG } from './components/CategoryGridGTBG'
import { CategoryGridMLMO } from './components/CategoryGridMLMO'

function App() {
  const [user]=useAuthState(auth);
  return (
    <>
  
   
   <Router>
      
      <Route exact path="/Act1" component= {user ? Act2 : ""} />
      <Route exact path="/Act2" component= {user ? Act2 : ""} />
      <Route exact path="/Act3" component= {user ? Act3 : ""} />
      <Route exact path="/Act4" component= {user ? Act4 : ""} />
      <Route exact path="/Act5" component= {user ? Act5 : ""} />
      <Route exact path="/Act6" component= {user ? Act6 : ""} />

      <Route exact path="/home" component= {LandingPage} />
      <Route exact path="/" component= {LandingPage} />
      <Route exact path="/settings" component= {Settings} />

   
      
      <Route exact path="/categories/sthlm" component= {CategoryGridSTHLM} />
      <Route exact path="/categories/sthlm/akt" component= {THSthlm} />
      <Route exact path="/categories/sthlm/akt1" component= {NFSthlm} />
      <Route exact path="/categories/sthlm/akt2" component= {MDSthlm} />
      <Route exact path="/categories/sthlm/akt3" component= {BFSthlm} />
      <Route exact path="/categories/sthlm/akt4" component= {KNSthlm} />
      <Route exact path="/categories/sthlm/akt5" component= {OvrigtSthlm} />

      <Route exact path="/categories/gbg" component= {CategoryGridGTBG} />
      <Route exact path="/categories/gbg/akt" component= {THGtbg} />
      <Route exact path="/categories/gbg/akt1" component= {NFGtbg} />
      <Route exact path="/categories/gbg/akt2" component= {MDGtbg} />
      <Route exact path="/categories/gbg/akt3" component= {BFGtbg} />
      <Route exact path="/categories/gbg/akt4" component= {KNGtbg} />
      <Route exact path="/categories/gbg/akt5" component= {OvrigtGtbg} />

      <Route exact path="/categories/mlmo" component= {CategoryGridMLMO} />
      <Route exact path="/categories/mlmo/akt" component= {THMlmo} />
      <Route exact path="/categories/mlmo/akt1" component= {NFMlmo} />
      <Route exact path="/categories/mlmo/akt2" component= {MDMlmo} />
      <Route exact path="/categories/mlmo/akt3" component= {BFMlmo} />
      <Route exact path="/categories/mlmo/akt4" component= {KNMlmo} />
      <Route exact path="/categories/mlmo/akt5" component= {OvrigtMlmo} />



      <div className="content">
        
        {user ? 
        "" : <SignIn />}
        
    
      </div>
    </Router>
    </>
      
  )
}

export default App;
