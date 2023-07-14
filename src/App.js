import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages';
import ContactPage from './pages/contact';
import KuraPage from './pages/kura';
import BTS from './components/BtsProject';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} exact />
				<Route path="/contact" element={<ContactPage />} exact />
				<Route path="/kuraproject" element={<KuraPage />} exact />
				<Route path="/btsproject" element={<BTS />} exact />
			</Routes>
		</Router>
	);
}

export default App;
