import AppWrapper from 'components/AppWrapper'
import { GetServerSideProps } from 'next'
import { ReactElement } from 'react'
import { getProperties } from 'services/hooks/useProperties'
import PropertiesTemplate, {
  PropertiesTemplateProps
} from 'templates/Properties'

export default function Properties(props: PropertiesTemplateProps) {
  return <PropertiesTemplate {...props} />
}

Properties.getLayout = function getLayout(page: ReactElement) {
  return <AppWrapper>{page}</AppWrapper>
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { page, price: daily_price, region, rooms } = ctx.query

  const { properties, totalCount } = await getProperties({
    currentPage: Number(page),
    registersPerPage: 6,
    daily_price: Number(daily_price) || 0,
    region: region || '',
    rooms: Number(rooms) || 0
  })

  return {
    props: {
      properties,
      totalCount
    }
  }
}
