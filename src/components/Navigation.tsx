import { css, useTheme } from "@emotion/react";

const Nav = () => {
  const theme = useTheme();

  const links = [
    { title: "About Us", href: "#about" },
    { title: "Inventory", href: "#items" },
    { title: "Product Showcase", href: "#showcase" },
  ];

  const navStyles = css`
    display: flex;
    list-style: none;
    padding: 0;
  `;

  const navLinkStyles = css`
    margin-left: ${theme.spacing.gap6};
    padding: ${theme.spacing.gap2};
    text-shadow: 3px 2px 2px ${theme.colors.shadow};
    transition: color 0.2s;

    @media (max-width: ${theme.breakpoints.md}) {
      margin-left: ${theme.spacing.gap4};
    }
  `;

  return (
    <nav>
      <ul css={navStyles}>
        {links.map((link) => (
          <li key={link.title}>
            <a href={`${link.href}`} css={navLinkStyles}>
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
