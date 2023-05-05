import type { Browser, Page } from "playwright";

interface RRecord {
  readonly [key: string]: string;
}

declare module "*.module.css" {
  const classes: RRecord;
  export default classes;
}

declare module "*.module.scss" {
  const classes: RRecord;
  export default classes;
}

declare global {
  const page: Page;
  const browser: Browser;
  const browserName: string;

  namespace JSX {
    interface Element extends HTMLElement {
      [key: string | number]: unknown | never;
    }
    interface IntrinsicElements {
      [key: string | number]: unknown | never;
    }
    interface IntrinsicAttributes {
      [key: string | number]: unknown | never;
    }
  }
}
