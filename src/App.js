import { useAuthState } from "react-firebase-hooks/auth";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { THSthlm } from "./components/THSthlm";
import { NFSthlm } from "./components/NFSthlm";
import { MDSthlm } from "./components/MDSthlm";
import { BFSthlm } from "./components/BFSthlm";
import { KNSthlm } from "./components/KNSthlm";
import { OvrigtSthlm } from "./components/OvrigtSthlm";

import { THGtbg } from "./components/THGtbg";
import { NFGtbg } from "./components/NFGtbg";
import { MDGtbg } from "./components/MDGtbg";
import { BFGtbg } from "./components/BFGtbg";
import { KNGtbg } from "./components/KNGtbg";
import { OvrigtGtbg } from "./components/OvrigtGtbg";

import { THMlmo } from "./components/THMlmo";
import { NFMlmo } from "./components/NFMlmo";
import { MDMlmo } from "./components/MDMlmo";
import { BFMlmo } from "./components/BFMlmo";
import { KNMlmo } from "./components/KNMlmo";
import { OvrigtMlmo } from "./components/OvrigtMlmo";

import SignIn from "./components/SignIn";
import { auth } from "./firebase.js";
import { LandingPage } from "./components/LandingPage";
import { About } from "./components/About";
import { Settings } from "./components/Settings";
import { CategoryGridSTHLM } from "./components/CategoryGridSTHLM";
import { CategoryGridGTBG } from "./components/CategoryGridGTBG";
import { CategoryGridMLMO } from "./components/CategoryGridMLMO";
import { CreateActivityGTBG } from "./components/CreateActivityGTBG";
import { CreateActivityMLMO } from "./components/CreateActivityMLMO";
import { CreateActivitySTHLM } from "./components/CreateActivitySTHLM";

function App() {
  const [user] = useAuthState(auth);
  return (
    <>
      <Router>
        <Route exact path="/home" component={user ? LandingPage : About} />
        <Route
          exact
          path="/degreeproject"
          component={user ? LandingPage : About}
        />
        <Route exact path="/settings" component={user ? Settings : About} />

        <Route
          exact
          path="/create/sthlm"
          component={user ? CreateActivitySTHLM : About}
        />
        <Route
          exact
          path="/create/gtbg"
          component={user ? CreateActivityGTBG : About}
        />
        <Route
          exact
          path="/create/mlmo"
          component={user ? CreateActivityMLMO : About}
        />
        <Route exact path="/chat" component={user ? THSthlm : About} />
        <Route exact path="/chat1" component={user ? THGtbg : About} />
        <Route exact path="/chat2" component={user ? THMlmo : About} />

        <Route
          exact
          path="/categories/sthlm"
          component={user ? CategoryGridSTHLM : About}
        />
        <Route
          exact
          path="/categories/sthlm/akt"
          component={user ? THSthlm : About}
        />
        <Route
          exact
          path="/categories/sthlm/akt1"
          component={user ? NFSthlm : About}
        />
        <Route
          exact
          path="/categories/sthlm/akt2"
          component={user ? MDSthlm : About}
        />
        <Route
          exact
          path="/categories/sthlm/akt3"
          component={user ? BFSthlm : About}
        />
        <Route
          exact
          path="/categories/sthlm/akt4"
          component={user ? KNSthlm : About}
        />
        <Route
          exact
          path="/categories/sthlm/akt5"
          component={user ? OvrigtSthlm : About}
        />

        <Route
          exact
          path="/categories/gbg"
          component={user ? CategoryGridGTBG : About}
        />
        <Route
          exact
          path="/categories/gbg/akt"
          component={user ? THGtbg : About}
        />
        <Route
          exact
          path="/categories/gbg/akt1"
          component={user ? NFGtbg : About}
        />
        <Route
          exact
          path="/categories/gbg/akt2"
          component={user ? MDGtbg : About}
        />
        <Route
          exact
          path="/categories/gbg/akt3"
          component={user ? BFGtbg : About}
        />
        <Route
          exact
          path="/categories/gbg/akt4"
          component={user ? KNGtbg : About}
        />
        <Route
          exact
          path="/categories/gbg/akt5"
          component={user ? OvrigtGtbg : About}
        />

        <Route
          exact
          path="/categories/mlmo"
          component={user ? CategoryGridMLMO : About}
        />
        <Route
          exact
          path="/categories/mlmo/akt"
          component={user ? THMlmo : About}
        />
        <Route
          exact
          path="/categories/mlmo/akt1"
          component={user ? NFMlmo : About}
        />
        <Route
          exact
          path="/categories/mlmo/akt2"
          component={user ? MDMlmo : About}
        />
        <Route
          exact
          path="/categories/mlmo/akt3"
          component={user ? BFMlmo : About}
        />
        <Route
          exact
          path="/categories/mlmo/akt4"
          component={user ? KNMlmo : About}
        />
        <Route
          exact
          path="/categories/mlmo/akt5"
          component={user ? OvrigtMlmo : About}
        />

        <div className="content">{user ? "" : <SignIn />}</div>
      </Router>
    </>
  );
}

export default App;
