import AppWrapper from 'components/AppWrapper'
import { ReactElement } from 'react'
import ChangePasswordTemplate from 'templates/ChangePassword'
import { withSSRAuth } from 'utils/withSSRAuth'

export default function ChangePasssword() {
  return <ChangePasswordTemplate />
}

ChangePasssword.getLayout = function getLayout(page: ReactElement) {
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
