import { css, useTheme } from "@emotion/react";
import { useRef } from "react";
import useStickyOnScroll from "../hooks/useStickyOnScroll";

type StickyHeaderProps = {
  children: React.ReactNode;
};

const StickyHeader = ({ children }: StickyHeaderProps) => {
  const theme = useTheme();

  const ref = useRef<HTMLElement>(null);
  const isSticky = useStickyOnScroll(ref);

  const headerStyles = css`
    position: ${isSticky ? "fixed" : "static"};
    ${isSticky && "top: 0;"}
    ${isSticky && "left: 0;"}
    ${isSticky && "box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);"}
		width: 100%;
    background-color: ${isSticky ? "rgb(10 43 52 / 90%)" : "transparent"};
    transition: background-color 0.2s;
    z-index: 1;
    padding: ${theme.spacing.gap2} 0;
  `;

  const childrenWrapper = css`
    max-width: ${theme.breakpoints.lg};
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${isSticky && `padding: 0 ${theme.spacing.gap4};`}
  `;

  return (
    <header ref={ref} css={headerStyles}>
      <div css={childrenWrapper}>{children}</div>
    </header>
  );
};

export default StickyHeader;
