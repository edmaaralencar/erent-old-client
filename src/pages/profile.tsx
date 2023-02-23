import AppWrapper from 'components/AppWrapper'
import { ReactElement } from 'react'
import ProfileTemplate from 'templates/Profile'
import { withSSRAuth } from 'utils/withSSRAuth'

export default function Profile() {
  return <ProfileTemplate />
}

Profile.getLayout = function getLayout(page: ReactElement) {
  return <AppWrapper>{page}</AppWrapper>
}

export const getServerSideProps = withSSRAuth(async () => {
  // const api = setupAPIClient(ctx)

  // const { data } = await api.get('/rentals/me')

  return {
    props: {
      // rentals: data.rentals
    }
  }
})
