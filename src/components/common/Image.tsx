import { css } from '@emotion/react';

type ImageProps = {
	src: string;
	alt: string;
};

const Image = ({ src, alt }: ImageProps) => {
	const imageStyles = css`
		max-width: 100%;
	`;

	return <img css={imageStyles} src={src} alt={alt} />;
};

export default Image;
