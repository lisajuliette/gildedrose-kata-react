import { css, useTheme } from "@emotion/react";
import { Item as ItemType } from "../types";
import { getQualityColor } from "../utils/qualityUtils";
import CardBorderVertical from "./common/CardBorderVertical";
import GridItem from "./common/GridItem";
import Image from "./common/Image";
import TextBox from "./common/TextBox";

type ItemProps = {
  item: ItemType;
  index: number;
};

const Item = ({ item, index }: ItemProps) => {
  const theme = useTheme();
  const qualityColor = getQualityColor(theme, item.quality);
  const hasOddIndex = index % 2 === 0;
  const isMobile = window.innerWidth <= 768;

  const daysRemainingNum = css`
    ${theme.typography.daysRemainingLabel.num};
    font-size: 4.8rem;
    line-height: 0;
    letter-spacing: -0.2rem;
    color: ${item.sellIn < 0 ? theme.colors.disabled : qualityColor};
  `;

  const daysRemainingText = css`
    ${theme.typography.daysRemainingLabel.text};
    color: ${item.sellIn < 0 ? theme.colors.disabled : qualityColor};
  `;

  const qualityNum = css`
    ${theme.typography.qualityLabel.num};
    font-size: 4.8rem;
    line-height: 0;
  `;

  const qualityText = css`
    ${theme.typography.qualityLabel.text};
    font-size: 2.4rem;
  `;

  const itemNameStyles = css`
    color: ${qualityColor};
  `;

  const positionStyles = css`
    position: relative;
  `;

  const svgStyles = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
}
	`;

  const qualityBadgeElement = css`
    color: ${qualityColor};
    text-shadow: 1px 1px 1px ${theme.colors.shadow};
    position: absolute;
    top: ${theme.spacing.gap4};
    transform-origin: top ${hasOddIndex ? "right" : "left"};
    ${hasOddIndex ? "right" : "left"}:${theme.spacing.gap4};
    transform: rotate(90deg)
      ${hasOddIndex ? "translateX(100%)" : "translateY(-100%)"};

    @media (max-width: ${theme.breakpoints.md}) {
      transform: rotate(90deg) translateY(-100%);
      transform-origin: top left;
      left: ${theme.spacing.gap4};
    }
  `;

  return hasOddIndex || isMobile ? (
    <>
      <GridItem span={8} mdSpan={6}>
        <div css={positionStyles}>
          {item.image && <Image src={item.image.src} alt={item.image.alt} />}
          <div css={qualityBadgeElement}>
            <span css={qualityNum}>{item.quality}</span>
            <span css={qualityText}> Quality</span>
          </div>
        </div>
      </GridItem>
      <GridItem span={4} mdSpan={6}>
        <div css={positionStyles}>
          {!isMobile && (
            <CardBorderVertical css={svgStyles} fill={qualityColor} />
          )}
          <TextBox>
            <span css={daysRemainingNum}>{item.sellIn}</span>
            <span css={daysRemainingText}> Days Remaining</span>
            <h3 css={itemNameStyles}>{item.name}</h3>
            <p>{item.description}</p>
          </TextBox>
        </div>
      </GridItem>
    </>
  ) : (
    <>
      <GridItem span={4} mdSpan={4}>
        <div css={positionStyles}>
          <CardBorderVertical css={svgStyles} fill={qualityColor} />
          <TextBox>
            <span css={daysRemainingNum}>{item.sellIn}</span>
            <span css={daysRemainingText}> Days Remaining</span>
            <h3 css={itemNameStyles}>{item.name}</h3>
            <p>{item.description}</p>
          </TextBox>
        </div>
      </GridItem>
      <GridItem span={8} mdSpan={6}>
        <div css={positionStyles}>
          {item.image && <Image src={item.image.src} alt={item.image.alt} />}
          <div css={qualityBadgeElement}>
            <span css={qualityNum}>{item.quality}</span>
            <span css={qualityText}> Quality</span>
          </div>
        </div>
      </GridItem>
    </>
  );
};

export default Item;
