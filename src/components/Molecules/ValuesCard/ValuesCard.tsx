import { IconTextRow } from "../../Atoms/IconTextRow/IconTextRow";
import Styles from "./ValuesCard.module.scss";

type ValuesCardProps = {};

export const ValuesCard = (props: ValuesCardProps) => {
	return (
		<div className={Styles.ValuesCard}>
			<h2>My values</h2>
			<div className={Styles.icons}>
				<IconTextRow icon="MessageCircle">Communication</IconTextRow>
				<IconTextRow icon="Accessibility">Accessibility</IconTextRow>
				<IconTextRow icon="LayoutGrid">Design system lover</IconTextRow>
				<IconTextRow icon="User">User centric</IconTextRow>
			</div>
		</div>
	);
};
