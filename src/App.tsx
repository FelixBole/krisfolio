import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { HomeNav } from "./components/Organisms/HomeNav/HomeNav";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { ProjectPage } from "./pages/ProjectPage/ProjectPage";

function App() {
	return (
		<div className="App">
			<Router>
				<HomeNav />
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/projects/:id" element={<ProjectPage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
