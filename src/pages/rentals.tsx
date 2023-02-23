import AppWrapper from 'components/AppWrapper'
import { ReactElement } from 'react'
import RentalsTemplate, { RentalsTemplateProps } from 'templates/Rentals'
import { withSSRAuth } from 'utils/withSSRAuth'
import { setupAPIClient } from 'services/api'

export default function Rentals(props: RentalsTemplateProps) {
  return <RentalsTemplate {...props} />
}

Rentals.getLayout = function getLayout(page: ReactElement) {
  return <AppWrapper>{page}</AppWrapper>
}

export const getServerSideProps = withSSRAuth(async ctx => {
  const api = setupAPIClient(ctx)

  const { data } = await api.get('/rentals/me')

  return {
    props: {
      rentals: data.rentals
    }
  }
})
