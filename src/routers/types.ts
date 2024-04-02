import { ComponentType } from "react";

export interface LocationStates {
  "/"?: {}
  "*"?: {};
  "/403"?: {};
  "/services"?: {};
  "/trainers"?: {};

  "/login"?: {};
  "/signup"?: {};

  "/booking"?: {};
  "/schedule"?: {};
  "/body-info"?: {};
}

export type PathName = keyof LocationStates;

export interface Page {
  path: PathName;
  exact?: boolean;
  component: ComponentType<Object>;
}
