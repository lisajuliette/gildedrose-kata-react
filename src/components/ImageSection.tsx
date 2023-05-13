import { css, useTheme } from '@emotion/react';

interface ImageSectionProps {
	imageUrl: string;
}

const ImageSection = ({ imageUrl }: ImageSectionProps) => {
	const theme = useTheme();

	const sectionStyles = css`
		height: 70vh;
		background-image: url(${imageUrl});
		background-size: cover;
		background-position: center;
		margin-top: ${theme.spacing.gap8};
	`;

	return <section css={sectionStyles}></section>;
};

export default ImageSection;
