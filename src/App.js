import { useAuthState} from 'react-firebase-hooks/auth';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Act1 } from './components/Act1';
import { Act2 } from './components/Act2';
import { Act3 } from './components/Act3';
import { Act4 } from './components/Act4';
import SignIn from './components/SignIn';
import { auth } from './firebase.js'
import { LandingPage } from './components/LandingPage'

function App() {
  const [user]=useAuthState(auth)
  return (
    <Router>
      <div className="content">
        
        {user ? 
        "" : <SignIn />}
      
    
    
      </div>
      <Route path="/Act1" component= {Act1} />
      <Route path="/Act2" component= {Act2} />
      <Route path="/Act3" component= {Act3} />
      <Route path="/Act4" component= {Act4} />
      <Route exact path="/" component= {LandingPage} />
    </Router>
      
  )
}

export default App;
