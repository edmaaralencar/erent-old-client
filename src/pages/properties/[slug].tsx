import AppWrapper from 'components/AppWrapper'
import { GetStaticProps } from 'next'
import { ReactElement } from 'react'
import api from 'services/apiClient'
import { getProperties } from 'services/hooks/useProperties'
import PropertyTemplate, { PropertyTemplateProps } from 'templates/Property'

export default function Property(props: PropertyTemplateProps) {
  return <PropertyTemplate {...props} />
}

Property.getLayout = function getLayout(page: ReactElement) {
  return <AppWrapper>{page}</AppWrapper>
}

export async function getStaticPaths() {
  const { properties } = await getProperties({
    currentPage: 1,
    registersPerPage: 9
  })

  const paths = properties.map(({ id }: { id: string }) => ({
    params: { slug: id }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await api.get(`/properties/${params?.slug}`)

  return {
    revalidate: 60,
    props: {
      property: data
    }
  }
}
