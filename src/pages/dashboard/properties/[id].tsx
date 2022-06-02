import { ReactElement } from 'react'

import { FiEdit, FiTrash } from 'react-icons/fi'

import DashboardWrapper from 'components/DashboardWrapper'
import IconButton from 'components/IconButton'
import PropertyTemplate from 'templates/Dashboard/Property'

export default function DashboardProperty() {
  return <PropertyTemplate />
}

DashboardProperty.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashboardWrapper
      button={
        <>
          <IconButton
            variant="primary"
            icon={<FiTrash size={22} className="icon" />}
          />
          <IconButton
            variant="primary"
            icon={<FiEdit size={22} className="icon" />}
          />
        </>
      }
      title="Propriedade"
    >
      {page}
    </DashboardWrapper>
  )
}
