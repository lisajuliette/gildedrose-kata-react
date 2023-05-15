import { css, useTheme } from "@emotion/react";
import { ChildrenProp } from "@/types";

type TextProps = {
  children: ChildrenProp;
};

const TextBox = ({ children }: TextProps) => {
  const theme = useTheme();

  const textBoxStyles = css`
    padding: ${theme.spacing.gap10};

    @media (max-width: ${theme.breakpoints.lg}) {
      padding: ${theme.spacing.gap6};
    }

    @media (max-width: ${theme.breakpoints.md}) {
      padding: 0 ${theme.spacing.gap4} ${theme.spacing.gap4};
    }

    @media (max-width: ${theme.breakpoints.sm}) {
      padding: 0 ${theme.spacing.gap2} ${theme.spacing.gap2};
    }
  `;

  return <div css={textBoxStyles}>{children}</div>;
};

export default TextBox;
