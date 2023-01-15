import { useNavigate } from "react-router-dom";
import { RoundedImage } from "../../Atoms/RoundedImage/RoundedImage";
import { Tag } from "../../Atoms/Tag/Tag";
import Styles from "./ProjectCard.module.scss";

type ProjectCardProps = {
	title: string;
	number: string;
	tags: string[];
	imgSrc: string;
	imgAlt: string;
	onclick?: () => any;
};

export const ProjectCard = ({
	title,
	number,
	tags,
	imgSrc,
	imgAlt,
	onclick = () => {},
}: ProjectCardProps) => {
	const navigate = useNavigate();

	return (
		<div
			className={Styles.ProjectCard}
			onClick={() => {
				navigate(`/projects/${number}`);
			}}
		>
			<div className={Styles.header}>
				<h3>{title}</h3>
				<span>{number}</span>
			</div>
			<div className={Styles.tags}>
				{tags.map((tag, idx) => (
					<Tag key={tag} isFirst={idx === 0}>
						{tag}
					</Tag>
				))}
			</div>
			<RoundedImage src={imgSrc} alt={imgAlt} />
		</div>
	);
};
