import { SVGProps } from "react";
import { useTheme } from "@emotion/react";

const SunMoon = (props: SVGProps<SVGSVGElement>) => {
  const theme = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 50 50"
      {...props}
    >
      <path
        fill={theme.colors.primary}
        fillRule="evenodd"
        d="m50 24.9-.9-1-11.3-11.3L25.7.5c-.4-.5-.4-.5-.9 0L14.2 11l-10 10-3.7 3.7c-.1.2-.3.3 0 .5l3.9 4 8 8 4.6 4.6 5.6 5.5 2.7 2.8 1.6-1.7 11.6-11.7 5.7-5.6 5.9-6V25zm-7.6-6 5 5.1H36.2v-.1a23 23 0 0 0-.5-2.2c0-.3 0-.4.3-.6l4-1.6 1.7-.7c.3-.1.4 0 .7.1zM41 17.8l-.4.2-4.8 2c-.7.3-.6.3-1-.2C34 18.3 33 17 31.6 16l-.2-.2 2.9-5 6.8 6.9zm-15-4.1V2.6l3.7 3.6L33 9.6c.2.2.2.3 0 .6L30.5 15c-.1.2-.2.3-.4.2a9 9 0 0 0-3.9-1l-.2-.3v-.2zm.9 1.7c2.1.4 4 1.4 5.5 3 1.4 1.4 2.3 3 2.6 5v.6H15.6v-.3a10 10 0 0 1 7-8 9 9 0 0 1 4.3-.3zm-9.3-5.8 7.1-7h.4v11.5c-1 0-1.4.1-2 .3l-2.2.7c-.3.1-.5.2-.6-.2l-2.7-4.8c-.2-.1-.2-.3 0-.5zM16.3 11l1.4 2.4 1.4 2.3v.5c-1.5 1-2.7 2.2-3.5 3.7-.2.4-.4.4-.7.3L9.6 18l-.1-.1 6.8-7zm-8.1 8c.2-.2.3-.2.6 0l5.6 2.2c.5.2.5.2.4.8l-.5 2.1H3.1l.8-.8L8.2 19zm-2.3 9.6-.3-.4-.4-.3c.4 0 .6-.2.6-.5l.7.6c-.3 0-.5.3-.6.6zm5.8 2.8c-.1-.8-.6-1.2-1.4-1.4.8-.2 1.3-.7 1.4-1.4.2.8.7 1.2 1.5 1.4-.8.2-1.3.6-1.5 1.4zm5 5.9a2 2 0 0 0-1.4-1.5c.8-.1 1.2-.6 1.4-1.4.2.8.7 1.2 1.4 1.4-.8.2-1.2.7-1.4 1.5zM25 45c-.1-.3-.3-.5-.6-.5l.6-.7c.1.3.3.5.7.6-.4.1-.6.3-.7.6zm0-3.6c-.2-1.2-1-1.9-2-2.1 1-.3 1.8-1 2-2l.7 1.3c.3.4.8.5 1.3.7-1 .2-1.8 1-2 2zm8.3-4.2a2 2 0 0 0-1.4-1.5c.7-.2 1.2-.6 1.4-1.4.2.8.6 1.3 1.4 1.4-.8.2-1.2.7-1.4 1.5zm1.7-11a10 10 0 0 1-7.8 8.5c-1.7.3-3.4.2-5-.3a9.6 9.6 0 0 1-6-5.6c-.3-.8-.5-2-.7-2.9-.1-.5 0-.9.5-.9h18.6c.5 0 .5.7.4 1.2zm3.2 5.1c-.2-.8-.6-1.2-1.4-1.4.8-.2 1.3-.6 1.4-1.4a2 2 0 0 0 1.5 1.4c-.8.2-1.3.6-1.5 1.4zm6.1-3.2-.2.4a.9.9 0 0 0-.6-.6l.6-.6c.1.3.3.4.6.5l-.4.3z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default SunMoon;
