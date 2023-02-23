import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;

  max-width: 120rem;
  margin: 0 auto;

  padding: 2.4rem;
`

export const PropertiesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8rem;

  @media (max-width: 830px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`

export const Property = styled.div`
  display: flex;
  flex-direction: column;

  border: 0.2rem solid #dce2e5;
`

export const PropertyHeader = styled.p`
  font-size: 2.4rem;

  strong {
    font-weight: bold;
  }
`

export const PropertyImage = styled.img`
  width: 100%;
  height: 37.5rem;
`

export const PropertyDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    font-size: 3.2rem;
    font-weight: bold;

    small {
      font-size: 2rem;
      font-weight: normal;
    }
  }
`

export const PropertyContent = styled.div`
  padding: 2.4rem 3.2rem;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1.8rem;
    color: #858585;
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }

  strong {
    margin-top: 1.6rem;
    margin-bottom: 3.2rem;

    font-size: 3.6rem;
    font-weight: ${({ theme }) => theme.font.weight.medium};

    small {
      font-size: 2rem;
      color: #858585;
    }
  }

  a {
    max-width: 100%;
    margin-top: 2.4rem;
  }
`

export const PropertyHouseInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;

  span {
    font-size: 2.4rem;
  }
`

export const HouseInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`

export const Divider = styled.div`
  width: 2px;
  height: 3.4rem;
  background: ${({ theme }) => theme.colors.primary.main};
`

export const Slider = styled.div`
  overflow: auto;
  display: flex;
  scroll-snap-type: x mandatory;

  .box {
    height: 200px;
    width: 200px;
    background: red;
    margin-right: 5px;
    flex-shrink: 0;
    scroll-snap-align: start;
  }
`

export const Dots = styled.div`
  display: flex;
  justify-content: center;

  .dot {
    all: unset;
    margin-right: 5px;
    height: 10px;
    width: 10px;
    border-radius: 10px;
    background: gray;
    margin-top: 10px;
  }
`
