import { ReactElement } from 'react'

import DashboardWrapper from 'components/DashboardWrapper'

import RentalsTemplate from 'templates/Dashboard/Rentals'
import { withSSRAuth } from 'utils/withSSRAuth'

export default function DashboardRentals() {
  return <RentalsTemplate />
}

DashboardRentals.getLayout = function getLayout(page: ReactElement) {
  return <DashboardWrapper title="Aluguéis">{page}</DashboardWrapper>
}

export const getServerSideProps = withSSRAuth(
  async () => {
    return {
      props: {}
    }
  },
  { isAdmin: true }
)
