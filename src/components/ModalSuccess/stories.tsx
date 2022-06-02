import { Story, Meta } from '@storybook/react'
import ModalSuccess, { ModalSuccessProps } from '.'

export default {
  title: 'ModalSuccess',
  component: ModalSuccess,
  argTypes: {
    title: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    href: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<ModalSuccessProps> = args => (
  <ModalSuccess {...args} />
)

Default.args = {
  title: 'Propriedade criada!',
  description:
    'Propriedade criada com sucesso. Clique no Ok e vá para a lista de propriedades.',
  href: '/'
}
