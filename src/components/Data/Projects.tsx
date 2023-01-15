import p1 from "../../assets/img/projects/p1.png";
import p2 from "../../assets/img/projects/p2.png";
import p3 from "../../assets/img/projects/p3.png";
import p4 from "../../assets/img/projects/p4.png";
import p5 from "../../assets/img/projects/p5.png";
import p6 from "../../assets/img/projects/p6.png";

type Project = {
	id: string;
	title: string;
	tags: string[];
	imgSrc: string;
	case: {
		description: string;
		how: string;
		goal: string;
		infos: {
			role: string;
			tools: string[];
		};
	};
	process: { title: string; content: string }[];
};

export const projects: Project[] = [
	{
		id: "01",
		title: "Track funding",
		tags: ["Fintech", "SASS", "B2C"],
		imgSrc: p1,
		case: {
			description: "",
			how: "",
			goal: "",
			infos: {
				role: "",
				tools: [],
			},
		},
		process: [],
	},
	{
		id: "02",
		title: "Agent tool",
		tags: ["SASS", "B2B", "ENERGY"],
		imgSrc: p2,
		case: {
			description:
				"This is an in-house SAAS service already sold by triPica, but redesigned by me and the product team for its Swiss energy customer Primeo Energie.",
			how: "Go to the heart of the agents' job: learning all the energy jargon (electricity and gas), benefiting from the expertise of an expert in the field, including design thinking for a well-tested and coherent methodology.",
			goal: "To be able to help customer managers and invoicers as well as other energy businesses better manage their various tasks on a daily basis.",
			infos: {
				role: "Product Designer",
				tools: ["Figma", "Miro"],
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
					"User testing was done with effective results. I advocated doing A/B testing.",
			},
		],
	},
	{
		title: "App Source Mobile",
		id: "03",
		tags: ["SASS", "Mobile", "B2C", "Eco-friendly"],
		imgSrc: p3,
		case: {
			description: "",
			how: "",
			goal: "",
			infos: {
				role: "",
				tools: [],
			},
		},
		process: [],
	},
	{
		title: "Noyoco Website",
		id: "04",
		tags: ["E-commerce", "B2C", "Eco-friendly"],
		imgSrc: p4,
		case: {
			description: "",
			how: "",
			goal: "",
			infos: {
				role: "",
				tools: [],
			},
		},
		process: [],
	},
	{
		title: "Evolve an existing service",
		id: "05",
		tags: ["E-commerce", "B2C"],
		imgSrc: p5,
		case: {
			description: "",
			how: "",
			goal: "",
			infos: {
				role: "",
				tools: [],
			},
		},
		process: [],
	},
	{
		title: "Service promise",
		id: "06",
		tags: ["Blueprint", "UX Canva", "B2C"],
		imgSrc: p6,
		case: {
			description: "",
			how: "",
			goal: "",
			infos: {
				role: "",
				tools: [],
			},
		},
		process: [],
	},
];

export const getProjectById = (id: string) => {
	return projects.find((p) => p.id === id);
};
