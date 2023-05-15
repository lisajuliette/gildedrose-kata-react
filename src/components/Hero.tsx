import { css, useTheme } from "@emotion/react";
import Grid from "./common/Grid";
import GridItem from "./common/GridItem";
import Logo from "./common/Logo";
import StickyHeader from "./StickyHeader";
import Nav from "./Navigation";
import imageTavern from "../assets/images/tavern.png";

const Hero = () => {
  const theme = useTheme();

  const heroStyles = css`
    background-image: url(${imageTavern});
    background-size: cover;
    min-height: 75vh; //move to variable
    position: relative;
  `;

  const heroTextContainer = css`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding-left: ${theme.spacing.gap10};

    @media (max-width: ${theme.breakpoints.md}) {
      padding-left: ${theme.spacing.gap4};
    }

    @media (max-width: ${theme.breakpoints.sm}) {
      padding-left: ${theme.spacing.gap2};
    }
  `;

  return (
    <div css={heroStyles}>
      <Grid>
        <GridItem span={12} mdSpan={6}>
          <StickyHeader>
            <Logo />
            <Nav />
          </StickyHeader>
          <div css={heroTextContainer}>
            <h1>Welcome to the Gilded Rose</h1>
            <h2>Where magic meets comfort</h2>
          </div>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Hero;
