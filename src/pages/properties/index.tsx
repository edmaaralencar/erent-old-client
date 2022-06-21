import { GetServerSideProps } from 'next'
import api from 'services/apiClient'
import { Property } from 'services/hooks/useProperties'
import PropertiesTemplate from 'templates/Properties'

export type PropertiesProps = {
  properties: Property[]
}

export default function Properties({ properties }: PropertiesProps) {
  console.log(properties)
  return <PropertiesTemplate />
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { data } = await api.get('/properties')

  console.log(ctx.query)

  return {
    props: {
      properties: data.properties
    }
  }
}
