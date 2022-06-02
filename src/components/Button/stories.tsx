import { Story, Meta } from '@storybook/react'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    href: {
      type: 'string'
    },
    children: {
      type: 'string'
    },
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'outlined', 'success', 'error']
      }
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large']
      }
    },
    isSubmitting: {
      type: 'boolean'
    }
  }
} as Meta

export const Default: Story<ButtonProps> = args => <Button {...args} />

Default.args = {
  children: 'Veja mais'
}
