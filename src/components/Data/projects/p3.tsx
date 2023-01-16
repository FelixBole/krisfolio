import { RoundedImage } from "../../Atoms/RoundedImage/RoundedImage";
import { Project } from "../Projects";

import p3_img from "../../../assets/img/projects/p3.png";
import screen1 from "../../../assets/img/projects/p3/screen_1.png";
import screen2 from "../../../assets/img/projects/p3/screen_2.png";
import screen3 from "../../../assets/img/projects/p3/screen_3.png";
import screen4 from "../../../assets/img/projects/p3/screen_4.png";

const Details = () => {
	return (
		<>
			<div className="flexImages">
				<RoundedImage src={screen1} alt="Example screen" />
				<RoundedImage src={screen2} alt="Example screen" />
				<RoundedImage src={screen3} alt="Example screen" />
				<RoundedImage src={screen4} alt="Example screen" />
			</div>
		</>
	);
};

export const p3: Project = {
	title: "App Source Mobile",
	id: "03",
	tags: ["SASS", "Mobile", "B2C", "Eco-friendly"],
	imgSrc: p3_img,
	case: {
		description:
			"Bouygues Telecom and Lilo wanted to use TriPica to benefit from the SAAS formula of the available app and thus offer its users a new sub-brand with a consumption tracking point for its users.",
		how: "The app has been in place for a long time and so have its components. However, it was necessary to give a new touch to the existing one, make the customizations of graphic charter and add all the features requested by Bouygues Telecom.",
		goal: "Bring customers the first eco-friendly package so they can easily manage their mobile plan and think about the planet thanks to the features used by the app.",
		infos: {
			role: "Product Designer",
			tools: ["Figma", "Miro", "Jira"],
		},
	},
	process: [
		{
			title: "Empathy",
			content:
				"User study to understand customers, define objectives and needs.",
		},
		{
			title: "Definition",
			content:
				"Mobilefirst, wireframe, MVP, synthesize the insights of the heath map.",
		},
		{
			title: "Design / Exploration",
			content: "Brainstorming with the team and focusing on app accessibility.",
		},
		{
			title: "Prototype",
			content:
				"The MVP is already created and the prototype was its extension, made on Figma.",
		},
		{
			title: "Test",
			content: "User test and A/B test.",
		},
	],

	details: Details(),
};
