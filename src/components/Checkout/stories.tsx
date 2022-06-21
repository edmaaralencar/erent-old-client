import { Story, Meta } from '@storybook/react'
import Checkout, { CheckoutProps } from '.'

export default {
  title: 'Checkout',
  component: Checkout,
  argTypes: {
    daily_price: {
      type: 'number'
    }
  }
} as Meta

export const Default: Story<CheckoutProps> = args => <Checkout {...args} />

Default.args = {
  daily_price: 120
}
