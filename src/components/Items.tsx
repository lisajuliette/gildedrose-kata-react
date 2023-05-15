import { useRef, useContext } from 'react';
import { css, useTheme } from '@emotion/react';
import useStickyOnScroll from '../hooks/useStickyOnScroll';
import { ItemsContext } from './common/ItemsContext';
import { UseItemsReturnType } from '../hooks/useItems';
import ArrowLeft from './common/ArrowLeft';
import ArrowRight from './common/ArrowRight';
import Button from './common/Button';
import Grid from './common/Grid';
import GridItem from './common/GridItem';
import Item from './Item';
import SunMoon from './common/SunMoon';

const Items = () => {
	const contextValue = useContext(ItemsContext);

	const { items, handleNext, handleBack, hasHistory } = contextValue;
	const theme = useTheme();

	const ref = useRef<HTMLDivElement>(null);
	const isSticky = useStickyOnScroll(ref, 140);

	const buttonContainer = css`
		display: flex;
		justify-content: flex-end;
		position: relative;
		${isSticky && `max-width: ${theme.breakpoints.lg};`}
		${isSticky && 'margin: 0 auto;'}
    ${isSticky && `padding: 0 ${theme.spacing.gap4};`}
    svg {
			height: 50px;
		}
	`;

	const filler = css`
		height: 50px;
		display: inline-block;
	`;

	const stickyButtonsStyle = css`
		position: fixed;
		top: 13.6rem;
		width: 100%;
		z-index: 2;
		left: 0;
		svg {
			filter: drop-shadow(3px 2px 2px ${theme.colors.shadow});
		}
	`;

	return (
		<Grid id="items">
			<GridItem span={12} mdSpan={6}>
				<div css={isSticky && filler}></div>
				<div
					className="StickyButtons"
					css={isSticky && stickyButtonsStyle}
					ref={ref}
				>
					<div css={buttonContainer}>
						<Button disabled={!hasHistory} onClick={handleBack}>
							<ArrowLeft disabled={!hasHistory} />
						</Button>
						<SunMoon />
						<Button onClick={handleNext}>
							<ArrowRight />
						</Button>
					</div>
				</div>
			</GridItem>
			<>
				{items.map((item, index) => (
					<Item
						key={item.name + item.quality + item.sellIn}
						index={index}
						item={item}
					/>
				))}
			</>
		</Grid>
	);
};

export default Items;
