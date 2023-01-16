import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { HomeNav } from "./components/Organisms/HomeNav/HomeNav";
import { ScrollTop } from "./context/ScrollTop";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { ProjectPage } from "./pages/ProjectPage/ProjectPage";

function App() {
	return (
		<div className="App">
			<Router>
				<HomeNav />
				<ScrollTop>
					<Routes>
						<Route path="/" element={<LandingPage />} />
						<Route path="/projects/:id" element={<ProjectPage />} />
					</Routes>
				</ScrollTop>
			</Router>
		</div>
	);
}

export default App;
