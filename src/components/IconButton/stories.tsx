import { Story, Meta } from '@storybook/react'
import { FiTrash } from 'react-icons/fi'
import IconButton, { IconButtonProps } from '.'

export default {
  title: 'IconButton',
  component: IconButton,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'white']
      }
    },
    icon: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<IconButtonProps> = args => <IconButton {...args} />

Default.args = {
  variant: 'primary',
  icon: <FiTrash size={22} className="icon" />
}
