import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 3.2rem;
`

export const Rental = styled.div`
  display: grid;
  grid-template-columns: 18.7rem 1fr 1fr;
  gap: 4rem;
`

export const RentalImage = styled.div`
  position: relative;
`

export const RentalInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.6rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    p {
      font-size: 2.4rem;
      font-weight: ${({ theme }) => theme.font.weight.medium};
    }
  }
`

export const RentalDates = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    text-align: center;

    @media (max-width: 760px) {
      text-align: left;
      width: fit-content;
    }

    span {
      font-size: 2.4rem;
    }

    svg {
      margin: 0 auto;
    }
  }
`

export const PropertyImage = styled.div`
  position: relative;
  width: 100%;
  height: 15rem;
  border-radius: 0.8rem;
  overflow: hidden;

  @media (max-width: 960px) {
    grid-row: 2 / 3;
    grid-column: 1 / 5;
    height: 25rem;
  }
`

export const Small = styled.small`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.gray.main};
  text-transform: uppercase;

  &.align {
    text-align: center;

    @media (max-width: 760px) {
      text-align: left;
    }
  }
`
