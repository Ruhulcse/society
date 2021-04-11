import "./App.css";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Landing from "./Components/Landing";
import Admin from "./Components/Admin/App";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LanguageContextProvider } from "./context/language";

function App() {
  return (
    <>
      <LanguageContextProvider>
        {/* <Router>
          <Route exact path="/" component={Landing} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
        </Router> */}
        <Admin />
      </LanguageContextProvider>
    </>
  );
}

export default App;
