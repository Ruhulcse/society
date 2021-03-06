import "./App.css";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import FullNews from "./Components/FullNews";
import Landing from "./Components/Landing";
import Admin from "./Components/Admin/App";
import Users from "./Components/Admin/User";
import Proposal from "./Components/Admin/Proposal";
import ProposalView from "./Components/Admin/ProView";
import Project from "./Components/Admin/Project";
import News from "./Components/Admin/News"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LanguageContextProvider } from "./context/language";

function App() {
  return (
    <>
      <LanguageContextProvider>
        <Router>
          <Route exact path="/" component={Landing} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/news" component={FullNews}/>
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/admin/project" component={Project}/>
          <Route exact path="/admin/users" component={Users} />
          <Route exact path="/admin/proposal" component={Proposal} />
          <Route exact path="/admin/proposal/view" component={ProposalView}/>
          <Route exact path="/admin/news" component={News} />
        </Router>
      </LanguageContextProvider>
    </>
  );
}

export default App;
