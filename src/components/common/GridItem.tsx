import { css, useTheme } from '@emotion/react';
import { ChildrenProp } from '@/types';

type GridItemProps = {
	children: ChildrenProp;
	span: number;
	mdSpan: number;
};

const GridItem = ({ children, span, mdSpan }: GridItemProps) => {
	const theme = useTheme();

	const gridItemStyles = css`
		grid-column: span ${span};

		@media (max-width: ${theme.breakpoints.md}) {
			grid-column: span ${mdSpan};
			${mdSpan === 4 &&
			'grid-column-start: 2; grid-column-end: 6; display: inline-block;'}
		}

		@media (max-width: ${theme.breakpoints.sm}) {
			grid-column: span 1;
		}
	`;

	return <div css={gridItemStyles}>{children}</div>;
};

export default GridItem;
