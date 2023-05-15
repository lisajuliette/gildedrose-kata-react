import { useTheme } from "@emotion/react";

type ArrowLeftProps = {
  disabled: boolean;
};

const ArrowLeft = ({ disabled }: ArrowLeftProps) => {
  const theme = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 42 50"
    >
      <path
        fill={disabled ? theme.colors.disabled : theme.colors.primary}
        fillRule="evenodd"
        d="m10.9 25 19.4 19.3c1 1 2 1.8 2.9 2.9.4.6.6 1.7.8 2.6-.7-.1-1.6 0-2.2-.4L15.1 32.7l-6.1-6c-1.3-1.3-1.4-2.4 0-3.7L31.4.6C32 0 33.2.2 34 0c-.3 1-.5 2.2-1.1 2.8L12.5 22.9 10.9 25z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ArrowLeft;
