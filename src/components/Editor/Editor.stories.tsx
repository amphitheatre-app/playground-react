import type { Meta, StoryObj } from "@storybook/react";

import { Editor } from "./Editor";

const meta = {
  title: "Example/Editor",
  component: Editor,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [
    (Story, context) => {
      return (
        <div style={{ width: "800px", height: "300px" }}>
          <Story {...context} />
        </div>
      );
    },
  ],
} satisfies Meta<typeof Editor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Editor",
  },
};
