import { Meta, StoryObj } from '@storybook/react';
import Footer from '.';

export type Story = StoryObj<typeof Footer>;

const meta: Meta<typeof Footer> = {
	component: Footer,
	parameters: {
		layout: 'centered',
	},
};

export default meta;

export const Default: Story = {};
