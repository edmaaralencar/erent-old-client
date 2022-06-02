import { GetServerSideProps } from 'next'
import api from 'services/apiClient'

export default function Properties() {
  return <h1>Properties</h1>
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
