import Button from 'components/Button'
import Heading from 'components/Heading'
import * as S from './styles'
import Pagination from 'components/Pagination'
import { useRouter } from 'next/router'
import { IProperty } from 'types/properties'
import { FaBath, FaBed } from 'react-icons/fa'

export type PropertiesTemplateProps = {
  properties: IProperty[]
  totalCount: number
}

function PropertiesTemplate({
  properties,
  totalCount
}: PropertiesTemplateProps) {
  const router = useRouter()

  const { page, price, region, rooms } = router.query

  function handlePageChange(page: number) {
    router.push(
      `/properties?page=${page}&price=${Number(price) > 0 ? price : 0}&region=${
        region ? region : ''
      }&rooms=${Number(rooms) > 0 ? rooms : 0}`
    )
  }

  return (
    <S.Wrapper>
      <Heading size="large">Propriedades</Heading>
      <S.PropertiesContainer>
        {properties.map(property => (
          <S.Property key={property.id}>
            <S.PropertyImage
              src={
                property.images[0] && (property?.images[0]?.image_url as string)
              }
            />
            <S.PropertyContent>
              <h3>
                {property.name} - {property.city}
              </h3>
              <strong>
                {property.daily_price} <small>/ noite</small>
              </strong>
              <S.PropertyHouseInfo>
                <S.HouseInfo>
                  <span>{property.rooms}</span>
                  <FaBed size={28} />
                </S.HouseInfo>
                <S.Divider />
                <S.HouseInfo>
                  <span>{property.bathrooms}</span>
                  <FaBath size={24} />
                </S.HouseInfo>
                <S.Divider />
                <div>
                  <span>{property.size} m2</span>
                </div>
              </S.PropertyHouseInfo>
              <Button size="small" as="a" href={`/properties/${property.id}`}>
                Veja mais
              </Button>
            </S.PropertyContent>
          </S.Property>
        ))}
      </S.PropertiesContainer>
      <Pagination
        totalCountOfRegisters={totalCount}
        currentPage={Number(page)}
        perPage={6}
        onPageChange={handlePageChange}
      />
    </S.Wrapper>
  )
}

export default PropertiesTemplate
