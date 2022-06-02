import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { FaBed, FaBath } from 'react-icons/fa'
import { FiCoffee } from 'react-icons/fi'
import { useQuery } from 'react-query'
import { useOptions } from 'services/hooks/useOptions'

import Heading from 'components/Heading'

import * as S from './styles'
import { queryClient } from 'services/queryClient'

type Option = {
  option: Record<string, unknown>
}

function PropertyTemplate() {
  const [formattedOptions, setFormattedOptions] = useState<any[]>([])
  const {
    query: { id }
  } = useRouter()

  const { data: options } = useOptions()
  const property: any = queryClient.getQueryData(['property', id])

  useEffect(() => {
    const arr = []

    const propertyOptions = property?.options.map((item: Option) => {
      return item.option
    })

    for (const key in options) {
      const option = options[key]

      if (propertyOptions.some((item: any) => item.id === option.id)) {
        arr.push({ ...option, propertyHas: true })
      } else {
        arr.push({ ...option, propertyHas: false })
      }
    }

    setFormattedOptions(arr)
  }, [options, property?.options])

  return (
    <S.Wrapper>
      <S.ImageContainer>
        <Image
          className="property-image"
          src={
            property?.images
              ? `http://localhost:3333/files/${property?.images[0].image_name}`
              : '/image.png'
          }
          alt={property?.name}
          layout="fill"
          objectFit="cover"
        />
      </S.ImageContainer>

      <S.Heading>
        <Heading size="xlarge" color="black" level={2}>
          {property?.name}
        </Heading>
        <span>
          {property?.city}, Região {property?.region}
        </span>
      </S.Heading>

      <S.InfoContainer>
        <S.Info>
          <span>{property?.rooms}</span>
          <FaBed size={28} />
        </S.Info>
        <S.HorizontalLine />
        <S.Info>
          <span>{property?.bathrooms}</span>
          <FaBath size={28} />
        </S.Info>
        <S.HorizontalLine />
        <span>{property?.size} m2</span>
      </S.InfoContainer>

      <S.Body>{property?.description}</S.Body>

      <S.Options>
        {formattedOptions.map((option: any) => (
          <S.Option propertyHas={option.propertyHas} key={option.id}>
            <S.OptionIcon>
              <FiCoffee size={40} color="47474D" />
            </S.OptionIcon>
            <span>{option.name}</span>
          </S.Option>
        ))}
      </S.Options>
    </S.Wrapper>
  )
}

export default PropertyTemplate
