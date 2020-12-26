import React from "react";

import CalendarControls from "../CalendarControls";

export default {
  title: "CalendarControls",
  component: CalendarControls,
};

const Template = (args) => <CalendarControls {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  date: new Date(),
};
