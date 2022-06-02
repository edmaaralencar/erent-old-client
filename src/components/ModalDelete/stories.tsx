import { Story, Meta } from '@storybook/react'
import ModalDelete, { ModalDeleteProps } from '.'

export default {
  title: 'ModalDelete',
  component: ModalDelete,
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

export const Default: Story<ModalDeleteProps> = args => (
  <ModalDelete {...args} />
)

Default.args = {
  title: 'Deletar a propriedade!',
  description: 'Você tem certeza que deseja deletar a propriedade?'
}
