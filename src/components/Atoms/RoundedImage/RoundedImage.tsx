import Styles from "./RoundedImage.module.scss";

type RoundedImageProps = {
	src: string;
	alt: string;
};

export const RoundedImage = ({ src, alt }: RoundedImageProps) => {
	return (
		<div className={Styles.RoundedImage}>
			<img src={src} alt={alt} />
		</div>
	);
};
