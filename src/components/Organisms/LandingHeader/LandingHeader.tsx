import Styles from "./LandingHeader.module.scss";

type LandingHeaderProps = {};

export const LandingHeader = (props: LandingHeaderProps) => {
	return (
		<div className={Styles.LandingHeader}>
			<h1 style={{ visibility: "hidden" }}>
				Kristina Jovovic Product Designer
			</h1>
			<span>Hello !</span>
			<div className={Styles.box}>
				<h2>Hi, I'm Kristina!</h2>
			</div>
			{/* <div className={Styles.box}>
				<h2>Product Designer</h2>
			</div> */}
			<span>Based in Bordeaux ///</span>
		</div>
	);
};
