import React, { useState } from "react";

import Calendar from "../Calendar";

export default {
  title: "Calendar",
  component: Calendar,
};

const Template = (args) => <Calendar {...args} />;

export const Default = Template.bind({});
Default.args = {
  date: new Date(),
};
