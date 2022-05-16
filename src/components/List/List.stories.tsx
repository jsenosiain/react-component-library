import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ListComponent from "./List";

import packageJson from "../../../package.json";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Library/List",
  component: ListComponent,	
} as ComponentMeta<typeof ListComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ListComponent> = (args) => (<ListComponent {...args} />);

export const List = Template.bind({});

List.args = {
	items: {
		"react": "16.13.1",
		"react-dom": "16.13.1",
	},
};