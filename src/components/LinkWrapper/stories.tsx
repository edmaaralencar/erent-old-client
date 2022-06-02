import { Story, Meta } from '@storybook/react'
import { LinkProps } from '.'
import Link from '.'

export default {
  title: 'Link',
  component: Link,
  argTypes: {
    text: {
      type: 'string'
    },
    href: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<LinkProps> = args => <Link {...args} />

Default.args = {
  text: 'Veja mais',
  href: '/home'
}
