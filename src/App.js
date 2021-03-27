import "./App.css";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Head from "./Components/Head";
import Service from "./Components/Service";
import Contact from "./Components/ContactUs";
import Work from "./Components/Work";
import Choose from "./Components/Choose";
import { LanguageContextProvider } from "./context/language";

function App() {
  return (
    <LanguageContextProvider>
      <Head />
      <About />
      <Service />
      <Work />
      <Choose />
      <Contact />
      <Footer />
    </LanguageContextProvider>
  );
}

export default App;
