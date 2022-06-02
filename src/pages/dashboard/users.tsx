import { ReactElement } from 'react'

import DashboardWrapper from 'components/DashboardWrapper'

import UsersTemplate from 'templates/Dashboard/Users'
import { withSSRAuth } from 'utils/withSSRAuth'

export default function DashboardUsers() {
  return <UsersTemplate />
}

DashboardUsers.getLayout = function getLayout(page: ReactElement) {
  return <DashboardWrapper title="Usuários">{page}</DashboardWrapper>
}

export const getServerSideProps = withSSRAuth(
  async () => {
    return {
      props: {}
    }
  },
  { isAdmin: true }
)
