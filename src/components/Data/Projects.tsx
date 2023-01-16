import { p1 } from "./projects/p1";
import { p2 } from "./projects/p2";
import { p3 } from "./projects/p3";
import { p4 } from "./projects/p4";
import { p5 } from "./projects/p5";
import { p6 } from "./projects/p6";

export type Project = {
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
	details: React.ReactNode;
};

export const projects: Project[] = [p1, p2, p3, p4, p5, p6];

export const getProjectById = (id: string) => {
	return projects.find((p) => p.id === id);
};
