import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Atoms/Button/Button";
import { RoundedImage } from "../../components/Atoms/RoundedImage/RoundedImage";
import {
	getNextProject,
	getPreviousProject,
	getProjectById,
	Project,
} from "../../components/Data/Projects";
import { ExpandableInfo } from "../../components/Molecules/ExpandableInfo/ExpandableInfo";
import Styles from "./ProjectPage.module.scss";

export const ProjectPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const goToProject = (where: "previous" | "next") => {
		if (!id) return;
		const target =
			where === "next" ? getNextProject(id) : getPreviousProject(id);
		navigate(`/projects/${target.id}`);
	};

	if (!id) return <>ID non reconnu</>;

	const project = getProjectById(id);

	if (!project) return <>Aucun projet avec cet id</>;

	return (
		<div className={Styles.ProjectPage}>
			<div className={Styles.top}>
				<RoundedImage src={project.imgSrc} alt={project.title} />
				<h3>The case</h3>
				<h1>{project.title}</h1>
				<p>{project.case.description}</p>
				<div className={Styles.topExpandable}>
					<ExpandableInfo title={"How?"} index={1} defaultExpanded={true}>
						<p>{project.case.how}</p>
					</ExpandableInfo>
					<ExpandableInfo title={"Goal"} index={2}>
						<p>{project.case.goal}</p>
					</ExpandableInfo>
					<ExpandableInfo title={"Infos"} index={3}>
						<p>
							<b style={{ paddingRight: "10px" }}>Role</b>{" "}
							{project.case.infos.role}
						</p>
						<p>
							<b style={{ paddingRight: "10px" }}>Tools</b>{" "}
							{project.case.infos.tools.join(" - ")}
						</p>
					</ExpandableInfo>
				</div>
			</div>
			<div className={Styles.mid}>
				<div className={Styles.midContent}>
					<h3>The process</h3>
					<div className={Styles.midExpandable}>
						{project.process.map(({ title, content }, idx) => (
							<ExpandableInfo
								key={`${title}-${idx}`}
								title={title}
								index={idx + 1}
								secondary={true}
							>
								<p>{content}</p>
							</ExpandableInfo>
						))}
					</div>
				</div>
			</div>
			<div className={Styles.bottom}>{project.details}</div>
			<div className={Styles.controls}>
				<Button onclick={() => goToProject("previous")}>Previous</Button>
				<Button onclick={() => goToProject("next")}>Next</Button>
			</div>
		</div>
	);
};
