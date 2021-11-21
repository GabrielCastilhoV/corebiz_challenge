declare module "*.svg" {
  const content: string;
  export default content;
}

declare module '*.png';

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg';