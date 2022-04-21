import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Reset from "./components/Reset/Reset";
import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/Dashboard/DashboardProfile";
import Script from "./components/Dashboard/DashboardScript";
import { useLocation, useMatch, useParams  } from "react-router-dom"

function App() {

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/script/:user" element={<Script/>} />
          <Route  path="/profile/:user" element={<Profile/>} />
          {/* render={() => <DashboardProfile  />} */}

        </Routes>
      </Router>
    </div>
  );
  let { user } = useParams();

}

export default App;
