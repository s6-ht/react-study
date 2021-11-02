import React, { ReactNode } from "react";
import CustomHook from "../pages/customHook";
import Table from "../pages/table";

interface IRoute {
  path: string;
  component: () => ReactNode;
}

export const routes: IRoute[] = [
  {
    path: "/custom-hooks",
    component: () => <CustomHook />,
  },
  {
    path: '/table',
    component: () => <Table />
  }
];
