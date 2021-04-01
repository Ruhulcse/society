import "./App.css";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Landing from "./Components/Landing";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LanguageContextProvider } from "./context/language";
import Head from "./Components/Head";
import About from "./Components/About";
import Service from "./Components/Service";
import Work from "./Components/Work";

function App() {
  return (
    <>
      <LanguageContextProvider>
        <Head />
        <About />
        <Service />
        <Work />
        {/* <Landing /> */}
      </LanguageContextProvider>
      {/* <About /> */}
      {/* <Router>
          <Route exact path="/" component={Landing} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
        </Router> */}
    </>
  );
}

export default App;
