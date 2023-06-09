import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard } from 'dxm-ui-component';

const meta: Meta<typeof ProductCard> = {
  title: 'DigitalExpManager/ProductCard',
  component: ProductCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

export const LLProduct: Story = {
  args: {
    sku: 'LL1',
    tenant: 'll',
  },
};
export const FCProduct: Story = {
  args: {
    sku: 'LL1',
    tenant: 'fc',
  },
};
export const GroceryProduct1: Story = {
  args: {
    sku: 'Grocery1',
    tenant: 'col',
  },
};
export const GCProduct1: Story = {
  args: {
    sku: 'GiftCard',
    tenant: 'col',
  },
};
