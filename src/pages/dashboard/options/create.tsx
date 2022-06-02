import { ReactElement } from 'react'

import DashboardWrapper from 'components/DashboardWrapper'
import CreateOptionTemplate from 'templates/Dashboard/CreateOption'
import { withSSRAuth } from 'utils/withSSRAuth'

export default function DashboardNewPropertie() {
  return <CreateOptionTemplate />
}

DashboardNewPropertie.getLayout = function getLayout(page: ReactElement) {
  return <DashboardWrapper title="Adicionar opção">{page}</DashboardWrapper>
}

export const getServerSideProps = withSSRAuth(
  async () => {
    return {
      props: {}
    }
  },
  { isAdmin: true }
)
