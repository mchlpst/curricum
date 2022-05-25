import './App.css';
import Contact from './Contact/Contact';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import Information from './Information/Information';
import Profile from './Profile/Profile';
import Skills from './Skills/Skills';

function App() {
	return (
		<div className="App">
			<Information />
			<section className="inline">
				<div>
					<Education />
					<Contact />
				</div>
				<div>
					<Profile />
					<Experience />
					<Skills />
				</div>
			</section>
		</div>
	);
}

export default App;
