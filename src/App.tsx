import { IconTextRow } from "./components/Atoms/IconTextRow/IconTextRow";
import { RoundedImage } from "./components/Atoms/RoundedImage/RoundedImage";
import { BannerSection } from "./components/Molecules/BannerSection/BannerSection";
import { ValuesCard } from "./components/Molecules/ValuesCard/ValuesCard";
import { HomeNav } from "./components/Organisms/HomeNav/HomeNav";

import p1 from "./assets/img/projects/p1.png";
import p2 from "./assets/img/projects/p2.png";
import p3 from "./assets/img/projects/p3.png";
import p4 from "./assets/img/projects/p4.png";
import p5 from "./assets/img/projects/p5.png";
import p6 from "./assets/img/projects/p6.png";
import { ProjectCard } from "./components/Molecules/ProjectCard/ProjectCard";
import { LandingHeader } from "./components/Organisms/LandingHeader/LandingHeader";

const projects = [
	{
		title: "Track funding",
		number: "01",
		tags: ["Fintech", "SASS", "B2C"],
		imgSrc: p1,
	},
	{
		title: "Agent tool",
		number: "02",
		tags: ["SASS", "B2B", "ENERGY"],
		imgSrc: p2,
	},
	{
		title: "App Source Mobile",
		number: "03",
		tags: ["SASS", "Mobile", "B2C", "Eco-friendly"],
		imgSrc: p3,
	},
	{
		title: "Noyoco Website",
		number: "04",
		tags: ["E-commerce", "B2C", "Eco-friendly"],
		imgSrc: p4,
	},
	{
		title: "Evolve an existing service",
		number: "05",
		tags: ["E-commerce", "B2C"],
		imgSrc: p5,
	},
	{
		title: "Service promise",
		number: "06",
		tags: ["Blueprint", "UX Canva", "B2C"],
		imgSrc: p6,
	},
];

function App() {
	return (
		<div className="App">
			<HomeNav />
			<LandingHeader />
			<BannerSection>
				<p>
					Designing is caring about problems and solving them as much as
					possible !
				</p>
				<p>
					My mission is to create seamless and elegant digital experiences for
					everyone.
				</p>
			</BannerSection>
			<ValuesCard />
			<h2>Latest Projects</h2>
			{projects.map(({ title, number, tags, imgSrc }) => (
				<ProjectCard
					title={title}
					number={number}
					tags={tags}
					imgAlt={title}
					imgSrc={imgSrc}
				/>
			))}
		</div>
	);
}

export default App;
