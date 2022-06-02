import { ReactElement } from 'react'

import DashboardWrapper from 'components/DashboardWrapper'
import CreatePropertyTemplate from 'templates/Dashboard/CreateProperty'

export default function DashboardNewPropertie() {
  return <CreatePropertyTemplate />
}

DashboardNewPropertie.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashboardWrapper title="Adicionar propriedade">{page}</DashboardWrapper>
  )
}
