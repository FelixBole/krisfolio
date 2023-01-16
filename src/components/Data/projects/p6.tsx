import p6_img from "../../../assets/img/projects/p6.png";
import { Project } from "../Projects";

export const p6: Project = {
	title: "Service promise",
	id: "06",
	tags: ["Blueprint", "UX Canva", "B2C"],
	imgSrc: p6_img,
	case: {
		description:
			"Study project. A small cooking school based in Paris wants to develop its activity. All their cooking classes are booked weeks in advance, she is now looking to develop new business activities. The school’s founders are thinking about offering online cooking classes. They are also thinking about launching a podcast.",
		how: "An exchange by email allowed to obtain verbatims users and to understand the expectations of my customers. Thanks to this, a strategy and methodology around gamification could be proposed. ",
		goal: "Develop the activity of the cooking school.",
		infos: {
			role: "Product Designer",
			tools: ["Figma", "Miro"],
		},
	},
	process: [
		{
			title: "Insights",
			content:
				"Analysis of the verbatims of 7 users who have expressed problems or desires.",
		},
		{
			title: "UX Canva",
			content:
				"Definition of a new value proposition, definition of new partners, key activities, permittee (segment) and customer relationship, revenues and costs generated.",
		},
		{
			title: "Service Blueprint",
			content:
				"Helps to give a clear presentation of what happens on both the front end to the client and back end of things to the school to answer all needs they may have.",
		},
		{
			title: "Tools",
			content:
				"A recommendation of communication, work and organizational tools to assist the client.",
		},
	],
	details: [],
};
