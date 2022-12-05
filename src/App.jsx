import Ambot from "./components/Ambot";
import NPS from "./components/NPS";
import Slideshow from "./components/Slideshow";
import Title from "./components/Title";
import WelcomeUser from "./components/WelcomeUser";
import Newsletter from "./components/Newsletter";
import Shorcuts from './components/Shorcuts';


function App() {
	return (
		<div className="main_component min-h-screen w-screen">
			<Slideshow />
			<div className="container relative z-20 mx-auto flex items-start justify-start">
				<div className="left-side w-8/12 p-8">
					<Ambot />
					<Title title="Últimas noticias" />
					<Newsletter/>
					<Title title="Accesos directos" />
					<Shorcuts/>
				</div>
				<div className="left-side flex w-4/12 flex-col px-10">
					<WelcomeUser />
					<NPS />
				</div>
			</div>
		</div>
	);
}

export default App
