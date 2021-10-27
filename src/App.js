import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import RedWines from './pages/RedWines';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/wines/red'>
					<RedWines />
				</Route>
			</Switch>
			<Footer />
			<GlobalStyle />
		</BrowserRouter>
	);
}

export default App;
