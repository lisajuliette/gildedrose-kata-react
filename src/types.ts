export type Item = {
  name: string;
  sellIn: number;
  quality: number;
  description?: string;
  image?: {
    src: string;
    alt: string;
  };
};

export type ChildrenProp =
  | React.JSX.Element
  | React.JSX.Element[]
  | string
  | number;
