import { css, useTheme } from "@emotion/react";
import { ChildrenProp } from "@/types";

type GridProps = {
  children: ChildrenProp;
  id?: string;
  small?: boolean;
};

const Grid = ({ children, id, small }: GridProps) => {
  const theme = useTheme();

  const gridStyles = css`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: ${small ? theme.spacing.gap6 : theme.spacing.gap12};
    max-width: ${theme.breakpoints.lg};
    margin: 0 auto;
    padding: ${small ? theme.spacing.gap6 : theme.spacing.gap12}
      ${theme.spacing.gap4};

    @media (max-width: ${theme.breakpoints.md}) {
      grid-template-columns: repeat(6, 1fr);
      grid-gap: ${small ? theme.spacing.gap4 : theme.spacing.gap6};
      padding: ${theme.spacing.gap4};
    }

    @media (max-width: ${theme.breakpoints.sm}) {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: ${small ? theme.spacing.gap2 : theme.spacing.gap4};
    }
  `;

  return (
    <div id={id} css={gridStyles}>
      {children}
    </div>
  );
};

export default Grid;
