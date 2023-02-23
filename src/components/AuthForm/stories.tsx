import { Story, Meta } from '@storybook/react'
import AuthForm, { AuthFormProps } from '.'

export default {
  title: 'AuthForm',
  component: AuthForm
} as Meta

export const Default: Story<AuthFormProps> = args => <AuthForm {...args} />
