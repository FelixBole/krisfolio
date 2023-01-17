import { PropsWithChildren } from "react";
import Styles from "./DetailsTextCard.module.scss";

type DetailsTextCardProps = {
	fullWidth?: boolean;
};

export const DetailsTextCard = ({
	children,
	fullWidth = false,
}: PropsWithChildren<DetailsTextCardProps>) => {
	return (
		<div
			className={Styles.DetailsTextCard}
			style={{ width: fullWidth ? "100%" : "40%" }}
		>
			{children}
		</div>
	);
};
