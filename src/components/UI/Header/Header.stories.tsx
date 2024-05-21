import { Meta, StoryObj } from '@storybook/react';
import Header from '.';

export type Story = StoryObj<typeof Header>;

const meta: Meta<typeof Header> = {
	component: Header,
	parameters: {
		layout: 'centered',
	},
};

export default meta;

export const Default: Story = {};
