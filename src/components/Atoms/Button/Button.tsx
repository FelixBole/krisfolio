import React, { PropsWithChildren } from "react";
import Styles from "./Button.module.scss";

type ButtonProps = {
	onclick?: (e: React.TouchEvent | React.MouseEvent) => any;
};

export const Button = ({
	children,
	onclick,
}: PropsWithChildren<ButtonProps>) => {
	const handleClick = (e: React.TouchEvent | React.MouseEvent) => {
		if (onclick) onclick(e);
	};

	return (
		<button className={Styles.Button} onClick={(e) => handleClick(e)}>
			{children}
		</button>
	);
};
