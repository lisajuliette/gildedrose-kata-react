import { css, useTheme } from "@emotion/react";
import Github from "./common/Github";
import Grid from "./common/Grid";
import GridItem from "./common/GridItem";

const Footer = () => {
  const theme = useTheme();

  const h4Styles = css`
    margin-block-start: ${theme.spacing.gap2};
  `;

  const flexStyles = css`
    display: flex;
    align-items: center;
  `;

  const anchorStyles = css`
    line-height: 0;
    width: 36px;
    padding: ${theme.spacing.gap2};
  `;

  return (
    <footer className="background--primary text--secondary">
      <Grid small>
        <GridItem span={12} mdSpan={4}>
          <h4 css={h4Styles}>Gilded Rose Kata</h4>
          <div css={flexStyles}>
            <a
              css={anchorStyles}
              target="_blank"
              href="https://github.com/lisajuliette/gildedrose-kata-react"
              rel="noreferrer"
            >
              <Github />
            </a>
            <p>By Lisa van Zyl</p>
          </div>
        </GridItem>
      </Grid>
    </footer>
  );
};

export default Footer;
