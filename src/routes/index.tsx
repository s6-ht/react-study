import React, { ReactNode } from "react";
import CustomHook from "../pages/customHook";

interface IRoute {
  path: string;
  component: () => ReactNode;
}

export const routes: IRoute[] = [
  {
    path: "/custom-hooks",
    component: () => <CustomHook />,
  },
];
