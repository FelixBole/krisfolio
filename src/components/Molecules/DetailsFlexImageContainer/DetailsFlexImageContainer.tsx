import { PropsWithChildren } from "react";
import Styles from "./DetailsFlexImageContainer.module.scss";

export const DetailsFlexImageContainer = ({ children }: PropsWithChildren) => {
	return <div className={Styles.DetailsFlexImageContainer}>{children}</div>;
};
