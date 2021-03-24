import "./App.css";
import About from "./Components/About";
import Head from "./Components/Head";
import Service from "./Components/Service";
import { LanguageContextProvider } from "./context/language";

function App() {
  return (
    <LanguageContextProvider>
      <Head />
      <About />
      <Service />
    </LanguageContextProvider>
  );
}

export default App;
