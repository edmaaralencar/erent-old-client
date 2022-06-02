import { ReactElement } from 'react'
import Link from 'next/link'

import DashboardWrapper from 'components/DashboardWrapper'
import PropertiesTemplate from 'templates/Dashboard/Properties'
import Button from 'components/Button'
import IconButton from 'components/IconButton'
import { FiPlus } from 'react-icons/fi'
import { withSSRAuth } from 'utils/withSSRAuth'

export default function DashboardProperties() {
  return <PropertiesTemplate />
}

DashboardProperties.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashboardWrapper
      button={
        <>
          <Link href="/dashboard/properties/create" passHref>
            <IconButton
              as="a"
              variant="primary"
              className="small-button"
              icon={<FiPlus className="icon" size={22} />}
            />
          </Link>
          <Link href="/dashboard/properties/create" passHref>
            <Button
              className="big-button"
              as="a"
              size="large"
              variant="primary"
            >
              Nova propriedade
            </Button>
          </Link>
        </>
      }
      title="Propriedades"
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
