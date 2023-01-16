import { ChevronUp } from "lucide-react";
import { PropsWithChildren, useState } from "react";
import Styles from "./ExpandableInfo.module.scss";

type ExpandableInfoProps = {
	title: string;
	index: number;
	defaultExpanded?: boolean;
	secondary?: boolean;
};

export const ExpandableInfo = ({
	title,
	index,
	defaultExpanded = false,
	secondary = false,
	children,
}: PropsWithChildren<ExpandableInfoProps>) => {
	const [expanded, setExpanded] = useState<boolean>(defaultExpanded);

	const handleChevronClick = () => {
		setExpanded(!expanded);
	};

	const idx = index < 10 ? `0${index.toString()}` : index.toString();

	return (
		<div
			className={`${Styles.ExpandableInfo} ${
				secondary ? Styles.secondary : ""
			}`}
		>
			<div className={Styles.header} onClick={() => handleChevronClick()}>
				<h3>{title}</h3>
				<span className={Styles.spans}>
					<span className={Styles.number}>{idx}</span>
					<span
						className={`${Styles.chevron} ${
							expanded ? Styles.chevronClicked : ""
						}`}
					>
						{<ChevronUp />}
					</span>
				</span>
			</div>

			<div
				className={`${Styles.content} ${expanded ? Styles.contentVisible : ""}`}
			>
				{children}
			</div>
		</div>
	);
};
