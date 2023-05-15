import { SVGProps } from "react";
import { useTheme } from "@emotion/react";

const ArrowRight = (props: SVGProps<SVGSVGElement>) => {
  const theme = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 42 50"
      {...props}
    >
      <path
        fill={theme.colors.primary}
        fillRule="evenodd"
        d="M31.1 24.8 11.7 5.5c-1-1-2-1.7-2.9-2.9A8 8 0 0 1 8 0c.8.1 1.7 0 2.3.4L27 17.1l6.1 6.1c1.3 1.3 1.4 2.3 0 3.7L10.6 49.2c-.6.6-1.7.4-2.5.6.3-1 .5-2.1 1.1-2.7l20.4-20.2 1.6-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ArrowRight;
