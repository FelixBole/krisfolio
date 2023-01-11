import { PropsWithChildren } from "react";
import Styles from "./Tag.module.scss";

type TagProps = {
	isFirst?: boolean;
};

export const Tag = ({
	isFirst = false,
	children,
}: PropsWithChildren<TagProps>) => {
	return (
		<span className={`${Styles.Tag} ${isFirst ? Styles.first : ""}`}>
			{children}
		</span>
	);
};
