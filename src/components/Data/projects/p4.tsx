import p4_img from "../../../assets/img/projects/p4.png";
import { Project } from "../Projects";

const Details = () => {
	return (
		<>
			<div className="projectDetailsTextCard">
				<h6>Edouard Delayette</h6>
				<p>Trader</p>
				<br />
				<h6>Goal</h6>
				<p>See if she likes clothes and possibly buy.</p>
				<br />
				<h6>Tools needed on a daily basis</h6>
				<p>
					It needs its customer management software and ENEDIS-specific
					platforms to report or analyse problems.
				</p>
				<br />
				<h6>State of mind</h6>
				<p>
					Ecologist, he tries to make efforts in his daily life to consume
					better. He expects to see good reviews online to be reassured.
				</p>
				<br />
				<h6>Expectations</h6>
				<p>
					He wants to know where his clothes come from, if they are French, if
					they are short circuit and especially what they are made of. He wants
					organic if he can.
				</p>
				<br />
				<h6>His navigation</h6>
				<p>
					He will always make a sorting during his research. Enter his size,
					colors as well as the material range if it is available.
				</p>
			</div>
			<h3>Audit - Nielsen Criteria - Recommendations for Redesign</h3>
			<ul>
				<li>
					Make the system visible for all categories on which the user places
					his cursor.
				</li>
				<li>
					Be able to return to the e-shop easily without losing its users from
					the Mask page. Propose a link in the navigation bar "Back to the
					e-shop"
				</li>
				<li>
					Some error fields or terms are written in English on the site. Many
					people do not speak English. I recommend to make a completely French
					version of the site and an English version for anglophones who wish to
					buy on the site.
				</li>
			</ul>
		</>
	);
};

export const p4: Project = {
	title: "Noyoco Website",
	id: "04",
	tags: ["E-commerce", "B2C", "Eco-friendly"],
	imgSrc: p4_img,
	case: {
		description:
			"Here is the Kercambre e-commerce agency, Noyoco.com. We did a redesign of the site to bring more conversion and also give a boost to the brand.",
		how: "By following the method of design thinking coupled with different steps of the UX process to improve the overall user experience of the site.",
		goal: "Easily inform users on the origin of all the merch while keeping a smooth navigation and thus answer all their questions. The objective is also to increase the conversion rate.",
		infos: {
			role: "UX Designer",
			tools: ["Adobe XD", "Miro", "Hotjar"],
		},
	},
	process: [
		{
			title: "Empathy",
			content: "Ergonomic audit (Nielsen criteria)",
		},
		{
			title: "Definition",
			content:
				"Heatmaps with Hotjar, mouseclick, analytics on Google Analytics.",
		},
		{
			title: "Design / Exploration",
			content: "Wireframes, mobile first, responsive webdesign.",
		},
		{
			title: "Prototype",
			content:
				"MVP tested with users and then protoype UI in high fidelity with different design principles.",
		},
		{
			title: "Test",
			content:
				"User test, 5 second test, AB tes/B testing for future improvements.",
		},
	],
	details: Details(),
};
