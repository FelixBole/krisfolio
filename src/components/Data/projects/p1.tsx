import { Project } from "../Projects";

import p1_img from "../../../assets/img/projects/p1.png";
import first from "../../../assets/img/projects/p1/first_mvp.png";
import second from "../../../assets/img/projects/p1/second_mvp.png";
import admin_crm from "../../../assets/img/projects/p1/admin_crm.png";
import { DetailsImage } from "../../Atoms/DetailsImage/DetailsImage";

const Details = () => {
	return (
		<>
			<h3>First MVP</h3>
			<DetailsImage src={first} alt={"First MVP"} />
			<p>
				Here the client arrives after his onboarding, this is a sequence of the
				next steps that await him before finalizing his file and financing. The
				task for users was to solve the banking problem on the screen and import
				the missing documents.{" "}
			</p>
			<p>
				Only, after doing these tests, I realized that there were a lot of
				details that were not understood, forgotten, and that were confused like{" "}
			</p>
			<ul>
				<li>Users coldn't even remember having donr an eligibility test</li>
				<li>
					They didn't undersand all the information on the screen and didn't
					know what to do
				</li>
				<li>
					They haven't been able to solve the banking problem and adding another
					account seemed superfluous to them
				</li>
				<li>
					Even the chronology of the steps was confusing, they did not
					understand how they could have two problems with a step validated in
					the middle.{" "}
				</li>
				<li>
					They thought they should send their documents on that same page
					without knowing in advance what to prepare on their side.{" "}
				</li>
				<li>
					Some said they would have called customer service directly if this
					type of screen were offered.{" "}
				</li>
			</ul>
			<p>
				It was an instructive failure! it's also why I tried to solve problems.
			</p>
			<h3>Second MVP</h3>
			<DetailsImage src={second} alt={"Second MVP"} />
			<p>After brainstorming with the PM, here are the improvements</p>
			<ul>
				<li>
					The timeline has been reviewed, there is no more step validated
					between two steps.
				</li>
				<li>The wording is clearer on the whole page.</li>
				<li>
					The problems have been circled and this may have clarified what was
					wrong with the screen.
				</li>
				<li>
					The user understood directly how to reconnect his bank, the message
					reassured him.
				</li>
				<li>
					He also knew what document was expected of him and he did not think
					that he should download them on the same page.{" "}
				</li>
			</ul>
			<h3>Intern software</h3>
			<DetailsImage src={admin_crm} alt={"Intern software"} />
			<p>
				This software is for internal teams like sales or Ops that take care of
				users. Here, the agents can send needed files directly to the client
				from this software to the onboarding process.
			</p>
		</>
	);
};

export const p1: Project = {
	id: "01",
	title: "Track funding",
	tags: ["Fintech", "SASS", "B2C"],
	imgSrc: p1_img,
	case: {
		description:
			"As part of the new version of Mansa's products, called V5, I worked on a way to automate the online process for the company's customers, Ops and Sales to enable faster funding.",
		how: "By taking stock of what already existed and meeting with my users to find out what was bothering them. It also involved internal users (my colleagues) who use a CRM. ",
		goal: "Avoid a process of going back and forth between sales and customers by email and google drive for sending supporting documents necessary for the creation of their financing file. ",
		infos: {
			role: "Product Designer",
			tools: ["Figma", "Miro", "Linear"],
		},
	},
	process: [
		{
			title: "An inventory",
			content: "To understand where the V4 was.",
		},
		{
			title: "Empathy",
			content:
				"A user study to understand my users and learn more about what bothers them the most every day, which slows down their work.",
		},
		{
			title: "Definition",
			content:
				"Brainstorming with the PM to define the substantive problem, what topics to prioritize",
		},
		{
			title: "Design/ Exploration",
			content:
				"Benchmark on our competitor and wireframe sites of the solution. Application of WCAG 2.2 accessibility criteria.",
		},
		{
			title: "Prototype",
			content: "Creation of an MVP, concepts of responsive taken into account.",
		},
		{
			title: "Test",
			content: "MVP presented in user test with scenario to my users.",
		},
		{
			title: "Iterations",
			content:
				"Thanks to the test feedback I was able to improve several aspects of the user flow!",
		},
	],
	details: Details(),
};
