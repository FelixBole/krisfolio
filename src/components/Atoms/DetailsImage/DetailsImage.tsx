import Styles from "./DetailsImage.module.scss";

type DetailsImageProps = {
	src: string;
	alt: string;
	fullWidth?: boolean;
};

export const DetailsImage = ({
	src,
	alt,
	fullWidth = true,
}: DetailsImageProps) => {
	return (
		<div className={Styles.DetailsImage}>
			<img src={src} alt={alt} style={{ width: fullWidth ? "100%" : "" }} />
		</div>
	);
};
