import { css } from "@emotion/react";

const GlobalStyles = (theme) => {
  const globalStyles = css`
    ${theme.typography};

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;
    }

    body {
      background-color: ${theme.colors.background};
      color: ${theme.colors.primary};
      font-size: 1.6rem;
      line-height: 1.4;
      margin: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: 0;
      margin-bottom: 0.5rem;
    }

    h1 {
      font-size: 4.8rem;
      line-height: 1.4;
    }

    h2 {
      font-size: 2.2rem;
      line-height: 1.2;
    }

    h3 {
      font-size: 2.4rem;
      line-height: 1.4;
    }

    h4 {
      font-size: 2.2rem;
      line-height: 1.2;
    }

    a {
      color: ${theme.colors.primary};
      text-decoration: none;
      cursor: pointer;
      &:hover {
        color: ${theme.colors.highlight};
      }
    }

    .text--secondary,
    .text--secondary * {
      color: ${theme.colors.secondary};
    }

    .background--primary {
      background-color: ${theme.colors.primary};
    }

    ul,
    ol {
      margin: 0;
      padding-left: 1.5rem;
    }

    li {
      margin-bottom: 0.5rem;
    }

    img {
      max-width: 100%;
      height: auto;
      display: block;
    }
  `;

  return globalStyles;
};

export default GlobalStyles;
