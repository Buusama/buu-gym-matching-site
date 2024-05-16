import { ComponentType } from "react";

export interface LocationStates {
  "/"?: {}
  "*"?: {};
  "/403"?: {};
  "/services"?: {};
  "/services/:id"?: {};
  "/services/pay-done"?: {};
  
  "/trainers"?: {};
  "/trainers/:id"?: {};

  "/login"?: {};
  "/signup"?: {};

  "/member/booking-history"?: {};
  "/member/schedules"?: {};
  "/member/schedules/:id"?: {};

  "/trainer/schedules"?: {};
  "/trainer/booking/:id"?: {};
  "/trainer/booking-history"?: {};

  "/body-info"?: {};
}

export type PathName = keyof LocationStates;

export interface Page {
  path: PathName;
  exact?: boolean;
  component: ComponentType<Object>;
}
