import { DateRangePicker } from '@mantine/dates'
import { DateRangePickerValue } from '@mantine/dates/lib/components/DateRangePicker'
import { IRental } from 'types/rental'
import Button from 'components/Button'
import { useMemo, useState } from 'react'
import { toast } from 'react-toastify'
import api from 'services/apiClient'
import { calculateDifferenceBetweenDates, getDaysArray } from 'utils/date'
import { priceFormatter } from 'utils/formatter'
import * as S from './styles'
import { useAuth } from 'context/AuthContext'

export type CheckoutProps = {
  daily_price: number
  rentals: any
  // rentals: IRental[]
  property_id: string
}

function Checkout({ daily_price, rentals, property_id }: CheckoutProps) {
  const [step, setStep] = useState<'select' | 'payment'>('select')
  const [days, setDays] = useState(0)
  const [value, setValue] = useState<DateRangePickerValue>([
    new Date(),
    new Date()
  ])
  const { isAuthenticated } = useAuth()

  const notAvailableDates = useMemo<any>(() => {
    const rentalsFormatted = rentals?.map((rental: IRental) => {
      return getDaysArray(rental.check_in, rental.checkout)
    })

    // eslint-disable-next-line prefer-spread
    const mergedArrays = [].concat.apply([], rentalsFormatted)

    return mergedArrays
  }, [rentals])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const [check_in, checkout] = value

    const { data } = await api.post('/rentals', {
      property_id,
      check_in,
      checkout
    })

    window.location.href = data.checkoutUrl
  }

  function handleChooseDate() {
    const [check_in, checkout] = value
    const daysBetweenValues = getDaysArray(check_in as Date, checkout as Date)

    const isDateNotAvailable =
      notAvailableDates.filter((date: number) =>
        daysBetweenValues.includes(date)
      ).length > 0

    if (isDateNotAvailable) {
      toast.error('Essa data não está disponível.')
      return
    }

    const betweenDays = calculateDifferenceBetweenDates(
      check_in as Date,
      checkout as Date
    )

    setStep('payment')
    setDays(betweenDays)
  }

  return (
    <S.Wrapper onSubmit={handleSubmit}>
      <h4>
        R$ {daily_price} <span>/ noite</span>
      </h4>

      <S.InputContainer>
        <DateRangePicker
          value={value}
          onChange={setValue}
          locale="pt-br"
          excludeDate={date => {
            date.setHours(0, 0, 0, 0)
            return notAvailableDates.includes(date.getTime())
          }}
          dayStyle={(_, modifiers) =>
            modifiers.disabled === true
              ? {
                  backgroundColor: '#C92A2A',
                  color: '#FFFFFF',
                  borderRadius: 0
                }
              : {}
          }
        />
      </S.InputContainer>

      {step === 'select' && (
        <Button
          type="button"
          className="button"
          variant="primary"
          size="small"
          onClick={handleChooseDate}
          disabled={!isAuthenticated}
        >
          Próximo passo
        </Button>
      )}

      {step == 'payment' && (
        <S.Values>
          <S.Value>
            <span>
              {priceFormatter.format(daily_price)} * {days}
            </span>
            <span>{priceFormatter.format(days * daily_price)}</span>
          </S.Value>
          <S.Value>
            <span>Taxa de serviço</span>
            <span>R$ 17</span>
          </S.Value>
          <S.HorizontalLine />
          <S.Value>
            <span>Total</span>
            <span>{priceFormatter.format(days * daily_price + 17)}</span>
          </S.Value>

          <Button
            className="button"
            type="submit"
            variant="primary"
            size="small"
          >
            Reservar
          </Button>
        </S.Values>
      )}
    </S.Wrapper>
  )
}

export default Checkout
