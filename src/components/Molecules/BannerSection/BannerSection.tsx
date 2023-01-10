import { PropsWithChildren } from "react";
import Styles from "./BannerSection.module.scss";

type BannerSectionProps = {};

export const BannerSection = ({
	children,
}: PropsWithChildren<BannerSectionProps>) => {
	return <div className={Styles.BannerSection}>{children}</div>;
};
