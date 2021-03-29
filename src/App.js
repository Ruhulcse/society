import "./App.css";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Head from "./Components/Head";
import LatestNews from "./Components/LatestNews";
import LatestProject from "./Components/LatestProject";
import Service from "./Components/Service";
import Work from "./Components/Work";
import { LanguageContextProvider } from "./context/language";

function App() {
  return (
    <LanguageContextProvider>
      <Head />
      <About />
      <Service />
      <Work />
      <LatestProject />
      <LatestNews />
      <ContactUs />
      <Footer />
    </LanguageContextProvider>
  );
}

export default App;
