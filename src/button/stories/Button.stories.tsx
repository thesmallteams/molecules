import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import "./button.css";
import { Button, ButtonProps } from "../../index";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};