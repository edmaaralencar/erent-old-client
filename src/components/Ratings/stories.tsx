import { Story, Meta } from '@storybook/react'
import Ratings from '.'

export default {
  title: 'Ratings',
  component: Ratings
} as Meta

export const Default: Story = () => <Ratings />
