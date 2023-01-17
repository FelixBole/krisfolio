import { Project } from "../Projects";

import p2_img from "../../../assets/img/projects/p2.png";
import agent_tool from "../../../assets/img/projects/p2/agent_too_dashboard.png";
import flow_manager from "../../../assets/img/projects/p2/flow_manager.png";
import sorting_cards from "../../../assets/img/projects/p2/2_sorting_cards.png";
import { DetailsImage } from "../../Atoms/DetailsImage/DetailsImage";

const Details = () => {
	return (
		<>
			<h3>Contracts tab : User Test on PDL</h3>
			<DetailsImage src={agent_tool} alt="Agent tool" />
			<h3>Given scenario</h3>
			<p>
				A client you contact because he has constant power outages in his home,
				what do you say?
			</p>
			<h3>Flow Manager tab: Sorting cards</h3>
			<DetailsImage src={sorting_cards} alt="Sorting Cards" />
			<p>
				Created in order to discover how my users classify the different labels
				of their profession in order to prioritize those that will be displayed
				on our product.
				<br />
				<b>Ranking in order of importance</b>
				<br />
				very important to important steps.
			</p>
			<h3>Personae</h3>
			<div className="projectDetailsTextCard">
				<h6>Thomas Bonaparti</h6>
				<p>Client manager</p>
				<br />
				<h6>Goal</h6>
				<p>Customer satisfaction</p>
				<br />
				<h6>Tools needed on a daily basis</h6>
				<p>
					software and ENEDIS-specific platforms to report or analyse problems.
				</p>
				<br />
				<h6>Main challenges</h6>
				<ul>
					<li>Respond and process customer requests</li>
					<li>Follow up on consumption</li>
					<li>Manges billing and consumption customer requests</li>
				</ul>
				<br />
				<h6>What are its search criterias for resolving a use case</h6>
				<p>
					Name, address and postal code, then by customer number or e-mail, and
					finally by PDL. If they have the customer online, they also need to
					ensure their contract number and know if they have multiple contracts.
				</p>
			</div>
			<p>
				In order to better target the clientele, the creation of personae was
				necessary. Here is what emerged from previous research.
			</p>
			<h3>Prototype</h3>
			<DetailsImage src={flow_manager} alt={"Flow manager"} />
		</>
	);
};

export const p2: Project = {
	id: "02",
	title: "Agent tool",
	tags: ["SASS", "B2B", "ENERGY"],
	imgSrc: p2_img,
	case: {
		description:
			"This is an in-house SAAS service already sold by triPica, but redesigned by me and the product team for its Swiss energy customer Primeo Energie.",
		how: "Go to the heart of the agents' job: learning all the energy jargon (electricity and gas), benefiting from the expertise of an expert in the field, including design thinking for a well-tested and coherent methodology.",
		goal: "To be able to help customer managers and invoicers as well as other energy businesses better manage their various tasks on a daily basis.",
		infos: {
			role: "Product Designer",
			tools: ["Figma", "Miro", "Jira"],
		},
	},
	process: [
		{
			title: "Empathy",
			content:
				"A user study to understand my users and learn more about their profession, the tools used, their constraints etc.",
		},
		{
			title: "Definition",
			content:
				"User test based on MVP, Sorting maps, synthesizing insights based on affinity diagram.",
		},
		{
			title: "Design / Exploration",
			content:
				"Brainstorming of the product team with insights to understand problems, research and application of WCAG 2.2 accessibility criteria.",
		},
		{
			title: "Prototype",
			content:
				"As the MVP was already created, it was enough to iterate with the information of the last stages and to improve it to make a final prototype. Concepts of responsive consideration.",
		},
		{
			title: "Test",
			content:
				"User testing was done with effective results. I also did tests with the tool Maze to have different kind of results. I advocated doing A/B testing.",
		},
	],
	details: Details(),
};
