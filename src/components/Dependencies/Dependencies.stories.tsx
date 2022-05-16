import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DependenciesComponent from "./Dependencies";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Library/Dependencies",
  component: DependenciesComponent,	
} as ComponentMeta<typeof DependenciesComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DependenciesComponent> = (args) => (<DependenciesComponent {...args} />);

export const Dependencies = Template.bind({});

/*
export const PeerDependenciesList = Template.bind({});

PeerDependenciesList.args = {
	items: packageJson.peerDependencies,
};

export const DevDependenciesList = Template.bind({});

DevDependenciesList.args = {
	items: packageJson.devDependencies,
};
*/