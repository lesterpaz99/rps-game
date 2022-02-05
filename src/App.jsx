import { useState, useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Loader } from './Loader';
import 'nes.css/css/nes.min.css';
import './App.css';

function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 3500);
	}, []);

	if (loading) return <Loader />;

	return (
		<div className='App'>
			<Header />
			<Footer />
		</div>
	);
}

export default App;
