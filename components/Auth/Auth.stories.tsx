import React from "react";

import { ComponentMeta } from "@storybook/react";

import Auth from "./Auth";

export default {
  title: "Auth",
  component: Auth,
} as ComponentMeta<typeof Auth>;

export const Playground = () => <Auth open={true} />;
