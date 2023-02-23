import * as S from './styles'
import { AiOutlineArrowDown } from 'react-icons/ai'
import Image from 'next/image'
import { IRental } from 'types/rental'
import AccountWrapper from 'components/AccountWrapper'

export type RentalsTemplateProps = {
  rentals: IRental[]
}

function RentalsTemplate({ rentals }: RentalsTemplateProps) {
  return (
    <AccountWrapper title="Meus aluguéis">
      <S.Wrapper>
        {rentals.map(rental => (
          <S.Rental key={rental.id}>
            <S.RentalImage>
              <Image
                src={
                  rental?.property?.images[0]?.image_name
                    ? `http://localhost:3333/files/${rental?.property?.images[0]?.image_name}`
                    : '/avatar.png'
                }
                layout="fill"
              />
            </S.RentalImage>
            <S.RentalInfo>
              <div>
                <S.Small>RIO DE JANEIRO, BRASIL</S.Small>
                <p>{rental.property.name}</p>
              </div>
              <div>
                <S.Small>TOTAL</S.Small>
                <p>R$ {rental.total}</p>
              </div>
            </S.RentalInfo>
            <S.RentalDates>
              <S.Small className="align">Período de aluguel</S.Small>
              <div>
                <span>{rental.check_in.toString()}</span>
                <AiOutlineArrowDown size={24} color="#18191F" />
                <span>{rental.checkout.toString()}</span>
              </div>
            </S.RentalDates>
          </S.Rental>
        ))}
        {/* <Heading size="large">Meus aluguéis</Heading>
        <S.Rentals>
          {rentals?.map(rental => (
            <S.Rental key={rental.id}>
              <S.RentalInfo>
                <div>
                  <S.Small>RIO DE JANEIRO, BRASIL</S.Small>
                  <p>{rental.property.name}</p>
                </div>
                <div>
                  <S.Small>TOTAL</S.Small>
                  <p>R$ {rental.total}</p>
                </div>
              </S.RentalInfo>
              <S.Divider />
              <S.RentalDates>
                <S.Small className="align">Período de aluguel</S.Small>
                <div>
                  <span>{rental.check_in.toString()}</span>
                  <AiOutlineArrowDown size={24} color="#18191F" />
                  <span>{rental.checkout.toString()}</span>
                </div>
              </S.RentalDates>
              <S.Divider />
              <S.PropertyImage>
                <Image
                  src={
                    rental?.property?.images[0]?.image_name
                      ? `http://localhost:3333/files/${rental?.property?.images[0]?.image_name}`
                      : '/avatar.png'
                  }
                  layout="fill"
                />
              </S.PropertyImage>
            </S.Rental>
          ))}
        </S.Rentals> */}
      </S.Wrapper>
    </AccountWrapper>
  )
}

export default RentalsTemplate
