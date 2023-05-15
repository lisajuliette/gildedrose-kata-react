import { SVGProps } from "react";
import { css, useTheme } from "@emotion/react";

const Github = (props: SVGProps<SVGSVGElement>) => {
  const theme = useTheme();

  const githubStyles = css`
    max-width: 20px;
  `;

  return (
    <svg
      css={githubStyles}
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 50 50"
      {...props}
    >
      <path
        fill={theme.colors.secondary}
        fillRule="evenodd"
        d="M20.5 36.6c-.9.9-1.3 1.9-1.5 3l-.3.4c-2.7 1-5.2.6-6.8-2a5 5 0 0 0-3.5-2.7 3 3 0 0 0-1.1 0c-.4.2-.5.5-.2.8l.6.6c1.3.7 2.2 1.8 2.6 3.1 1 2.9 3.8 4.1 6.8 3.8l1.7-.2v.5l.1 3.8c0 1.3-.7 1.8-2 1.3a24.8 24.8 0 0 1 2-47.4A24.8 24.8 0 0 1 33 49c-1 .3-1.8-.2-1.8-1.3v-6.2c0-1.9-.2-3.6-1.5-5l3-.6a9.8 9.8 0 0 0 8-9.5c.1-1.4 0-3-.1-4.4-.2-1.5-1-2.9-2-4-.2-.3-.3-.5-.2-.9.6-2 .5-3.8-.2-5.7-.1-.4-.3-.6-.7-.5-1 .2-2 .4-2.9.8-1 .4-2 1-3 1.6-.2 0-.5.2-.7.1a24 24 0 0 0-11.5 0l-.8-.1c-1.6-1-3.3-2-5.2-2.3H13c-.8-.2-.9-.1-1.1.7a9.3 9.3 0 0 0-.2 5.5l-.1.6a10.3 10.3 0 0 0-2.2 7.7c.1 1.6.3 3 1 4.5 1.2 3.4 3.9 5.2 7.3 6l2.8.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Github;
