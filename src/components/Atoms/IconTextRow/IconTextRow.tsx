import { Accessibility, LayoutGrid, MessageCircle, User } from "lucide-react";
import { PropsWithChildren } from "react";
import Styles from "./IconTextRow.module.scss";

type IconTextRowProps = {
	icon: "Accessibility" | "LayoutGrid" | "MessageCircle" | "User";
};

const icons = {
	Accessibility: <Accessibility />,
	LayoutGrid: <LayoutGrid />,
	MessageCircle: <MessageCircle />,
	User: <User />,
};

export const IconTextRow = ({
	icon,
	children,
}: PropsWithChildren<IconTextRowProps>) => {
	return (
		<div className={Styles.IconTextRow}>
			{icons[icon]}
			<p>{children}</p>
		</div>
	);
};
