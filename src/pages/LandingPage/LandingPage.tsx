import { projects } from "../../components/Data/Projects";
import { BannerSection } from "../../components/Molecules/BannerSection/BannerSection";
import { ProjectCard } from "../../components/Molecules/ProjectCard/ProjectCard";
import { ValuesCard } from "../../components/Molecules/ValuesCard/ValuesCard";
import { LandingHeader } from "../../components/Organisms/LandingHeader/LandingHeader";
import Styles from "./LandingPage.module.scss";

type LandingPageProps = {};

export const LandingPage = (props: LandingPageProps) => {
	return (
		<div className={Styles.LandingPage}>
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
			{projects.map(({ title, id, tags, imgSrc }) => (
				<ProjectCard
					key={title}
					title={title}
					number={id}
					tags={tags}
					imgAlt={title}
					imgSrc={imgSrc}
				/>
			))}
		</div>
	);
};
