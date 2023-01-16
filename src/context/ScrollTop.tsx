import { PropsWithChildren, useEffect } from "react";
import { useScrollTop } from "../hooks/useScrollTop";

export const ScrollTop = ({ children }: PropsWithChildren) => {
	useScrollTop();
	return <>{children}</>;
};
