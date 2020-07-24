import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Info from './pages/Info';
import Contacts from './pages/Contacts/ContactsNative';
import ContactsReactYandexMaps from './pages/Contacts/ContactsReactYandexMaps';

import './index.scss';

const App = () => {

	return (
		<>
			<Router>
				<Header />
				<Switch>
					<Route
						exact
						path="/"
						component={Home}
					/>
					<Route
						path="/info"
						component={Info}
					/>
					<Route
						path="/contacts"
						component={Contacts}
					/>
					<Route
						path="/contacts-react-npm"
						component={ContactsReactYandexMaps}
					/>
				</Switch>
			</Router>
		</>
	);
}

export default App;