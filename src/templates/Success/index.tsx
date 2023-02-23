import * as S from './styles'

import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import api from 'services/apiClient'
import Heading from 'components/Heading'
import Image from 'next/image'
import { dateFormatter } from 'utils/formatter'
import Button from 'components/Button'

function SuccessTemplate() {
  const { query } = useRouter()

  const { data: rental } = useQuery(['rental', query.session_id], async () => {
    const { data } = await api.get(`/rentals/${query.session_id}`)

    const rental = {
      ...data.rental,
      property: {
        ...data.rental.property,
        images: data.rental.property.images.map((image: any) => {
          return {
            ...image,
            image_url: `http://localhost:3333/files/${image.image_name}`
          }
        })
      }
    }

    return rental
  })

  console.log(rental)

  if (!rental) {
    return <p>Carregando...</p>
  }

  return (
    <S.Wrapper>
      <S.Container>
        <Heading color="primary" level={1} size="small">
          Parabéns, sua compra foi efetuada com sucesso!
        </Heading>
        <S.Image>
          <Image src={rental?.property?.images[0].image_url} layout="fill" />
        </S.Image>
        <p>
          O aluguél da propriedade <strong>{rental?.property.name}</strong> em{' '}
          <strong>{rental?.property.city}</strong> foi feito com sucesso para o
          dia <strong>{dateFormatter.format(new Date(rental.check_in))}</strong>{' '}
          até o dia{' '}
          <strong>{dateFormatter.format(new Date(rental.checkout))}</strong>.
        </p>
        <Button size="large" as="a" href="/rentals">
          Ver meus alugueis
        </Button>
      </S.Container>
    </S.Wrapper>
  )
}

export default SuccessTemplate
