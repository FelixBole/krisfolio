import p5_img from "../../../assets/img/projects/p5.png";
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
