/// <reference types="next" />
/// <reference types="next/types/global" />

declare module "*.scss" {
  const content: string;
  export default content;
}

declare module "*.svg" {
  const content: (props: {}) => JSX.Element;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}
