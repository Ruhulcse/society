import "./App.css";
import About from "./Components/About";
import Head from "./Components/Head";
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
    </LanguageContextProvider>
  );
}

export default App;
