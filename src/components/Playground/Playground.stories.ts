import type { Meta, StoryObj } from '@storybook/react';

import { Playground } from './Playground';

const meta = {
  title: 'Example/Playground',
  component: Playground,
} satisfies Meta<typeof Playground>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    label: 'Playground',
  },
};
