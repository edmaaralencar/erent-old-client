import { Story, Meta } from '@storybook/react'
import Input from 'components/Input'
import FormWrapper, { FormWrapperProps } from '.'

export default {
  title: 'FormWrapper',
  component: FormWrapper,
  argTypes: {
    children: {
      type: 'string'
    },
    cancelHref: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<FormWrapperProps> = args => (
  <FormWrapper {...args} />
)

Default.args = {
  children: (
    <>
      <Input
        error={{ message: 'oi' }}
        key="1"
        variant="normal"
        label="Nome da propriedade"
        name="name"
      />
      <Input
        error={{ message: 'oi' }}
        key="2"
        variant="normal"
        label="Cidade"
        name="name"
      />
      <Input
        error={{ message: 'oi' }}
        key="31"
        variant="normal"
        label="Região"
        name="name"
      />
      <Input
        error={{ message: 'oi' }}
        key="4"
        variant="normal"
        label="Descrição"
        name="name"
      />
    </>
  ),
  cancelHref: '/dashboard/properties'
}
