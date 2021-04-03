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
import Choose from "./Components/Choose";
import LatestProject from "./Components/LatestProject";
import LatestNews from "./Components/LatestNews";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Foot from "./Components/Foot";

function App() {
  return (
    <>
      <LanguageContextProvider>
        <Head />
        <About />
        <Service />
        <Work />
        {/* <Choose /> */}
        <LatestProject />
        {/* <LatestNews /> */}
        {/* <ContactUs /> */}
        {/* <Foot /> */}
        <Footer />
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
