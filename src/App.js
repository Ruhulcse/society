import './App.css';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import Head from './Components/Head';
import LatestProject from './Components/LatestProject';
import Choose from './Components/Choose'
import LatestNews from './Components/LatestNews';
import Login from './Components/Login';
import Service from './Components/Service';
import Signup from './Components/Signup';
import Work from './Components/Work';
import { LanguageContextProvider } from './context/language';

function App() {
	return (
		<LanguageContextProvider>
			<Head />
			<About />
			<Service />
			<Work />
      <Choose/>
      <LatestProject/>
			<LatestNews />
			<ContactUs />
			<Footer />
			<Signup />
			<Login />
		</LanguageContextProvider>
	);
}

export default App;
