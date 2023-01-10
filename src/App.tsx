import { IconTextRow } from "./components/Atoms/IconTextRow/IconTextRow";
import { BannerSection } from "./components/Molecules/BannerSection/BannerSection";
import { ValuesCard } from "./components/Molecules/ValuesCard/ValuesCard";
import { HomeNav } from "./components/Organisms/HomeNav/HomeNav";

function App() {
	return (
		<div className="App">
			<HomeNav />
			<h1>Kristina Jovovic</h1>
			<BannerSection>
				<p>
					Designing is caring about problems and solving them as much as
					possible !
				</p>
				<p>
					My mission is to creating seamless and elegant digital experiences for
					everyone.
				</p>
			</BannerSection>
			<ValuesCard />
		</div>
	);
}

export default App;
