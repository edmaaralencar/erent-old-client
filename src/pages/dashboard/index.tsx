import { ReactElement } from 'react'

import DashboardWrapper from 'components/DashboardWrapper'
import { withSSRAuth } from 'utils/withSSRAuth'

export default function Dashboard() {
  return <h1>Dashboard</h1>
}

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <DashboardWrapper title="Início">{page}</DashboardWrapper>
}

export const getServerSideProps = withSSRAuth(
  async () => {
    return {
      props: {}
    }
  },
  { isAdmin: true }
)
