import { Story, Meta } from '@storybook/react'
import Input, { InputProps } from '.'

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    label: {
      type: 'string'
    },
    variant: {
      control: {
        type: 'select',
        options: ['normal', 'outlined']
      }
    }
  }
} as Meta

export const Default: Story<InputProps> = args => <Input {...args} />

Default.args = {
  label: 'Nome da propriedade'
}
