import Styles from "./RoundedImage.module.scss";

type RoundedImageProps = {
	src: string;
	alt: string;
	fullHeight?: boolean;
};

export const RoundedImage = ({
	src,
	alt,
	fullHeight = false,
}: RoundedImageProps) => {
	return (
		<div
			className={Styles.RoundedImage}
			style={{ height: !fullHeight ? "176px" : "100%" }}
		>
			<img src={src} alt={alt} />
		</div>
	);
};
