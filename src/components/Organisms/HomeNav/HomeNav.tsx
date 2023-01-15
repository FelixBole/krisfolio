import { useNavigate } from "react-router-dom";
import { Button } from "../../Atoms/Button/Button";
import { Logo } from "../../Atoms/Logo/Logo";
import Styles from "./HomeNav.module.scss";

type HomeNavProps = {};

export const HomeNav = (props: HomeNavProps) => {
	const navigate = useNavigate();

	return (
		<div className={Styles.HomeNav}>
			<Logo size={40} onclick={() => navigate("/")} />
			<div className={Styles.buttons}>
				<Button>Contact</Button>
				<Button>-</Button>
			</div>
		</div>
	);
};
