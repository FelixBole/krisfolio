import p5_img from "../../../assets/img/projects/p5.png";
import { DetailsImage } from "../../Atoms/DetailsImage/DetailsImage";
import { DetailsFlexImageContainer } from "../../Molecules/DetailsFlexImageContainer/DetailsFlexImageContainer";
import { DetailsTextCard } from "../../Molecules/DetailsTextCard/DetailsTextCard";
import { Project } from "../Projects";

const Details = () => {
	return (
		<>
			<h3>Teaching following the audit and usability test</h3>
			<div className="projectDetailsTextCard">
				<h6>Site Retention</h6>
				<p>Without a map, all the users had left the site to search on Maps</p>
			</div>
			<div className="projectDetailsTextCard">
				<h6>Research input</h6>
				<p>
					Without interactive search input, all users had to leave the site to
					find the monument's address on Google.
				</p>
			</div>
			<div className="projectDetailsTextCard">
				<h6>Filters and CTA</h6>
				<p>
					They are not highlighted and their grey colour gave the impression
					that they were disabled. All users missed out.
				</p>
			</div>
			<div className="projectDetailsTextCard">
				<h6>Loading</h6>
				<p>
					A rather long site loading and mobile and desktop scrolls that have
					disturbed users.
				</p>
			</div>
			<h3>Roadmap - Prioritization by sizing</h3>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					flexWrap: "wrap",
				}}
			>
				<DetailsTextCard>
					<h6>XL</h6>
					<p>Keep users on the site with a map accessible from the homepage.</p>
				</DetailsTextCard>
				<DetailsTextCard>
					<h6>XL</h6>
					<p>Help users easily search for an address.</p>
				</DetailsTextCard>
				<DetailsTextCard>
					<h6>L</h6>
					<p>Improve search speed with enhanced filters</p>
				</DetailsTextCard>
				<DetailsTextCard>
					<h6>M</h6>
					<p>Improve site loading speed to address frustration</p>
				</DetailsTextCard>
			</div>
			<DetailsImage src={""} alt={"Product roadmap"} />
			<DetailsFlexImageContainer>
				<DetailsImage src={""} alt="Example screen" />
				<DetailsImage src={""} alt="Example screen" />
				<DetailsImage src={""} alt="Example screen" />
				<DetailsImage src={""} alt="Example screen" />
			</DetailsFlexImageContainer>
			<h3>Lessons</h3>
			<DetailsTextCard fullWidth={true}>
				<h6>1</h6>
				<p>
					It was enough to improve the input and make it interactive to no
					longer have the problem of retention and abandonment on the homepage.
				</p>
			</DetailsTextCard>
			<DetailsTextCard fullWidth={true}>
				<h6>2</h6>
				<p>
					All users were able to make the journey quickly. Filters were noticed
					and applied.
				</p>
			</DetailsTextCard>
			<DetailsTextCard fullWidth={true}>
				<h6>3</h6>
				<p>
					Iterating my tests allowed me to see if the problem and the solution
					were correct of not. (for example, adding a button that ultimately was
					not used).
				</p>
			</DetailsTextCard>
		</>
	);
};

export const p5: Project = {
	title: "Evolve an existing service",
	id: "05",
	tags: ["E-commerce", "B2C"],
	imgSrc: p5_img,
	case: {
		description:
			"Project of studies giving the opportunity to develop a holiday site. The choice was on Hotel.com.",
		how: "Through two distinct phases that allow the evolution of the site. The first is to improve upstream through research, site ergonomics and the second by applying the lessons learned from the first phase with a team of stakeholders.",
		goal: "Improve site ergonomics, evolve it for more conversions and learn from it.",
		infos: {
			role: "UX Designer",
			tools: ["Figma", "Miro", "Jira"],
		},
	},
	process: [
		{
			title: "Ergonomie audit",
			content: "4 out of 10 criteria of Nielsen heuristics to be improved. ",
		},
		{
			title: "Usability test",
			content:
				"Even with a simple scenario, all participants left the site less than once. There was even an abandonment it's a real problem.",
		},
		{
			title: "Benchmark",
			content:
				"To explore good and bad practices, but also to illustrate four of the recommendations made.",
		},
		{
			title: "Sorting maps",
			content: "To observe mental models and user behaviour.",
		},
		{
			title: "Share analysis",
			content: "Done with site e-commerce manager.",
		},
		{
			title: "Co-creation workshop",
			content:
				"Done with stakeholders and the Lean UX method, to test the validity of hypotheses for site improvement.",
		},
		{
			title: "Roadmap",
			content:
				"That is spread over three weeks and presenting 4 key features to improve.",
		},
		{
			title: "MVP",
			content:
				"That is spread over three weeks and presenting 4 key features to improve.",
		},
		{
			title: "Test",
			content: "Guerrilla test",
		},
	],
	details: Details(),
};
