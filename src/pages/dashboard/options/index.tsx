import { ReactElement } from 'react'
import Link from 'next/link'
import { FiPlus } from 'react-icons/fi'

import DashboardWrapper from 'components/DashboardWrapper'
import Button from 'components/Button'
import IconButton from 'components/IconButton'
import { withSSRAuth } from 'utils/withSSRAuth'
import OptionsTemplate from 'templates/Dashboard/Options'

export default function DashboardOptions() {
  return <OptionsTemplate />
}

DashboardOptions.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashboardWrapper
      button={
        <>
          <Link href="/dashboard/options/create" passHref>
            <IconButton
              as="a"
              variant="primary"
              className="small-button"
              icon={<FiPlus className="icon" size={22} />}
            />
          </Link>
          <Link href="/dashboard/options/create" passHref>
            <Button
              as="a"
              variant="primary"
              className="big-button"
              size="large"
            >
              Nova opção
            </Button>
          </Link>
        </>
      }
      title="Opções"
    >
      {page}
    </DashboardWrapper>
  )
}

export const getServerSideProps = withSSRAuth(
  async () => {
    return {
      props: {}
    }
  },
  { isAdmin: true }
)
