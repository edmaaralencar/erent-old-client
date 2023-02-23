import Checkout from 'components/Checkout'
import Heading from 'components/Heading'
import Slider from 'components/Slider'
import Image from 'next/image'
import { FaBath, FaBed } from 'react-icons/fa'
import { AiFillStar, AiOutlineCoffee } from 'react-icons/ai'
import { Settings } from 'react-slick'
import { priceFormatter } from 'utils/formatter'

import api from 'services/apiClient'
import { useMutation, useQuery } from 'react-query'
import * as S from './styles'
import * as yup from 'yup'
import { IRental } from 'types/rental'
import { IProperty } from 'types/properties'
import Button from 'components/Button'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { queryClient } from 'services/queryClient'
import { toast } from 'react-toastify'
import { useState } from 'react'
import Ratings, { Rating } from 'components/Ratings'
import { FiStar } from 'react-icons/fi'
import { useAuth } from 'context/AuthContext'
import Loading from 'components/Loading'

export type PropertyTemplateProps = {
  property: IProperty
}

type FormInput = {
  message: string
  value: number
}

const createRatingSchema = yup.object().shape({
  message: yup.string().required('Mensagem obrigatória.')
})

function PropertyTemplate({ property }: PropertyTemplateProps) {
  const { user } = useAuth()

  const [hoverRating, setHoverRating] = useState(0)
  const [rating, setRating] = useState(0)

  const settings: Settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1
  }

  const { register, handleSubmit, reset } = useForm<FormInput>({
    resolver: yupResolver(createRatingSchema)
  })

  const { data: rentals } = useQuery(
    ['rentals', property?.id],
    async () => {
      const { data } = await api.get(`/rentals?property=${property?.id}`)

      return data.rentals
    },
    {
      staleTime: 1000 * 60 * 10
    }
  )

  const { data: myRentals } = useQuery<IRental[]>(
    ['rentals', property?.id],
    async () => {
      const { data } = await api.get(`/rentals/me`)

      return data.rentals
    },
    {
      staleTime: 1000 * 60 * 10
    }
  )

  const { data: ratings, isLoading } = useQuery(
    ['ratings', property?.id],
    async () => {
      const { data } = await api.get(`/ratings/${property.id}`)

      return data.ratings
    },
    {
      staleTime: 1000 * 60 * 10
    }
  )

  const handleCreateRating = useMutation(
    async (values: FormInput) => {
      const { data } = await api.post('/ratings', {
        property_id: property.id,
        message: values.message,
        value: values.value
      })

      return data
    },
    {
      onSuccess: () => queryClient.invalidateQueries(['ratings', property.id]),
      onError: () => {
        toast.error('Você já comentou nessa propriedade.')
      }
    }
  )

  if (!property) {
    return <Loading />
  }

  const formattedImages = property?.images?.map(
    (image: { image_name: string }) => ({
      image_url: `http://localhost:3333/files/${image.image_name}`
    })
  )

  const hasPropertyInRentals = myRentals?.some(
    rental => rental.property_id === property.id
  )

  const userHasAlreadyRated = ratings?.some(
    (rating: Rating) =>
      rating.user_id === user.id && rating.property_id === property.id
  )

  async function handleRating(values: FormInput) {
    const data: FormInput = {
      message: values.message,
      value: rating
    }

    await handleCreateRating.mutateAsync(data)
    reset()
    setHoverRating(0)
    setRating(0)
  }

  return (
    <S.Wrapper>
      <S.Header>
        <S.HeaderInfo>
          <small>{property.region}</small>
          <Heading color="primary" size="medium" level={1}>
            {property.name}
          </Heading>
        </S.HeaderInfo>
        <S.HeaderInfo>
          <small>AO DIA</small>
          <Heading color="primary" size="medium" level={2}>
            {priceFormatter.format(property.daily_price)}
          </Heading>
        </S.HeaderInfo>
      </S.Header>
      <S.HorizontalLine />
      <S.Container>
        <S.PropertyInfo>
          <S.ImageSlider>
            <Slider settings={settings}>
              {formattedImages.map((img, index) => (
                <S.Slide key={index}>
                  <Image layout="fill" src={img.image_url} />
                </S.Slide>
              ))}
            </Slider>
          </S.ImageSlider>

          <S.Info>
            <Heading size="medium" level={2}>
              {property.name}
            </Heading>
            <S.PlaceInfo>
              <div>
                <span>{property.rooms}</span>
                <FaBed size={32} />
              </div>
              <S.Divider />
              <div>
                <span>{property.bathrooms}</span>
                <FaBath size={32} />
              </div>
              <S.Divider />
              <span>{property.size} m2</span>
            </S.PlaceInfo>
          </S.Info>
          <S.Description>{property.description}</S.Description>
          <S.Options>
            <S.Option>
              <S.Icon>
                <AiOutlineCoffee size={40} color="#47474D" />
              </S.Icon>
              <S.Content>Cozinha</S.Content>
            </S.Option>
            <S.Option>
              <S.Icon>
                <AiOutlineCoffee size={40} color="#47474D" />
              </S.Icon>
              <S.Content>Cozinha</S.Content>
            </S.Option>
            <S.Option>
              <S.Icon>
                <AiOutlineCoffee size={40} color="#47474D" />
              </S.Icon>
              <S.Content>Cozinha</S.Content>
            </S.Option>
            <S.Option>
              <S.Icon>
                <AiOutlineCoffee size={40} color="#47474D" />
              </S.Icon>
              <S.Content>Cozinha</S.Content>
            </S.Option>
            <S.Option>
              <S.Icon>
                <AiOutlineCoffee size={40} color="#47474D" />
              </S.Icon>
              <S.Content>Cozinha</S.Content>
            </S.Option>
            <S.Option>
              <S.Icon>
                <AiOutlineCoffee size={40} color="#47474D" />
              </S.Icon>
              <S.Content>Cozinha</S.Content>
            </S.Option>
          </S.Options>
        </S.PropertyInfo>
        <Checkout
          rentals={rentals}
          daily_price={property?.daily_price}
          property_id={property?.id}
        />
      </S.Container>
      <S.CommentsContainer className="container-2">
        <S.HorizontalLine />
        <S.CommentsHeader>
          <AiFillStar size={32} color="#18191F" />
          <p>
            {ratings?.length || 0}{' '}
            {ratings?.length > 1 ? 'avaliações' : 'avaliação'}
          </p>
        </S.CommentsHeader>
        <S.CommentsForm onSubmit={handleSubmit(handleRating)}>
          <label htmlFor="">
            Deixe um comentário avaliando sua experiência:
          </label>
          <textarea {...register('message')} />
          <Ratings
            setRating={setRating}
            setHoverRating={setHoverRating}
            rating={rating}
            hoverRating={hoverRating}
          />
          <Button
            type="submit"
            size="small"
            disabled={!hasPropertyInRentals || userHasAlreadyRated}
          >
            Enviar
          </Button>
          {!hasPropertyInRentals && (
            <p>Você só pode comentar em propriedades que já alugou.</p>
          )}
          {userHasAlreadyRated && <p>Você já avaliou essa propriedade.</p>}
        </S.CommentsForm>
        {isLoading ? (
          <p>Carregando...</p>
        ) : (
          <>
            {ratings.length > 0 ? (
              <S.Comments>
                {ratings?.map((rating: Rating) => (
                  <S.Comment key={rating.id}>
                    <S.CommentProfile>
                      <Image src="/avatar.png" layout="fill" />
                    </S.CommentProfile>
                    <S.CommentContent>
                      <S.CommentHeader>
                        <h3>{rating?.user?.name}</h3>
                        {Array.from(
                          { length: rating?.value },
                          (_, i) => i + 1
                        ).map(index => (
                          <FiStar
                            key={index}
                            size={24}
                            color="#7A7A80"
                            fill="#7A7A80"
                          />
                        ))}
                      </S.CommentHeader>
                      <small>Há 2 horas atrás</small>
                      <p>{rating?.message}</p>
                    </S.CommentContent>
                  </S.Comment>
                ))}
              </S.Comments>
            ) : (
              <S.NotFound>Nenhum comentário disponível.</S.NotFound>
            )}
          </>
        )}
      </S.CommentsContainer>
    </S.Wrapper>
  )
}

export default PropertyTemplate
