import { useAuthState} from 'react-firebase-hooks/auth';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Act1 } from './components/Act1';
import { Act2 } from './components/Act2';
import { Act3 } from './components/Act3';
import { Act4 } from './components/Act4';
import { Act5 } from './components/Act5';
import { Act6 } from './components/Act6';
import SignIn from './components/SignIn';
import { auth } from './firebase.js'
import { LandingPage } from './components/LandingPage'

function App() {
  const [user]=useAuthState(auth);
  return (
    <>
  
   
   <Router>
      
      <Route exact path="/Act1" component= {user ? Act1 : ""} />
      <Route exact path="/Act2" component= {user ? Act2 : ""} />
      <Route exact path="/Act3" component= {user ? Act3 : ""} />
      <Route exact path="/Act4" component= {user ? Act4 : ""} />
      <Route exact path="/Act5" component= {user ? Act5 : ""} />
      <Route exact path="/Act6" component= {user ? Act6 : ""} />
      <Route exact path="/home" component= {LandingPage} />
      <Route exact path="/" component= {LandingPage} />
      <div className="content">
        
        {user ? 
        "" : <SignIn />}
        
    
      </div>
    </Router>
    </>
      
  )
}

export default App;
