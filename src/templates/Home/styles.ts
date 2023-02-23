import styled from 'styled-components'

import * as SliderStyles from 'components/Slider/styles'

export const Wrapper = styled.div``

export const Hero = styled.section`
  position: relative;

  padding: 4rem 2.4rem;
  margin-top: 1rem;

  background-color: ${({ theme }) => theme.colors.gray.lighter};

  @media (max-width: 1000px) {
    padding: 4rem 2.4rem;
  }

  .square {
    position: absolute;
    top: 0rem;
    right: 0;
    bottom: 0;
    z-index: 1;

    width: 44.7rem;

    background-color: ${({ theme }) => theme.colors.primary.main};

    @media (max-width: 1000px) {
      display: none;
    }
  }
`

export const Container = styled.div`
  position: relative;

  max-width: ${({ theme }) => theme.container.app};
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;

  @media (max-width: 1000px) {
    justify-content: center;
  }
`

export const HeroImage = styled.div`
  position: relative;
  width: 53rem;
  height: 48rem;
  z-index: 2;

  @media (max-width: 1200px) {
    width: 54rem;
    height: 50rem;
    z-index: 2;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;

  z-index: 3;
`

export const HeroText = styled.div`
  max-width: 55rem;

  p {
    margin-top: 2.4rem;
    font-size: 1.8rem;
  }

  @media (max-width: 1000px) {
    text-align: center;
  }

  @media (max-width: 530px) {
    text-align: left;
  }
`

export const Email = styled.section`
  max-width: ${({ theme }) => theme.container.app};
  margin: 4rem auto;

  background-color: ${({ theme }) => theme.colors.primary.main};
  border-radius: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 12rem;

  padding: 0 2rem;
`

export const EmailImage = styled.div`
  position: relative;
  width: 47rem;
  height: 37rem;

  margin-left: 8rem;
`

export const EmailContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7rem;
`

export const EmailInput = styled.div`
  background-color: ${({ theme }) => theme.colors.white.main};
  border-radius: 0.5rem;

  padding: 1rem;
  max-width: 40rem;
  display: flex;
  gap: 0.8rem;

  input {
    flex: 1;
    background: transparent;
    padding: 0.8rem;
    border: none;
  }

  button {
    padding: 1rem 2rem;
    background-color: ${({ theme }) => theme.colors.primary.main};
    font-size: 1.4rem;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    color: ${({ theme }) => theme.colors.gray.lighter};
    border: none;
    cursor: pointer;
    border-radius: 0.6rem;

    transition: all 300ms ease-in-out 0s;

    &:hover {
      background-color: #052b63d4;
    }
  }
`

export const TypesContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6.6rem;

  width: 100%;
  max-width: ${({ theme }) => theme.container.app};
  margin: 10rem auto;
  padding: 0 2.4rem;
`

export const Type = styled.div`
  border: 2px solid #dce2e6;
  border-radius: 1.6rem;

  display: flex;
`

export const TypeContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 2.4rem;

  strong {
    font-size: 3.2rem;
    /* line-height:  6.4rem; */
  }

  p {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.gray.darker};
  }

  button {
    max-width: 100%;
  }
`

export const TypeImage = styled.div`
  position: relative;

  width: 25.2rem;
  height: 24rem;

  img {
    border-radius: 1.6rem;
  }
`

export const Testimonials = styled.section`
  background-color: ${({ theme }) => theme.colors.primary.main};
  padding: 6rem 0;

  margin: 5rem 0;
`

export const TestimonialsContainer = styled.div`
  max-width: ${({ theme }) => theme.container.app};
  width: 100%;
  padding: 0 2.4rem;

  margin: 0 auto;

  ${SliderStyles.Wrapper} {
    .slick-list {
      margin: 0 -2.4rem;
    }
    .slick-slide > div {
      padding: 0 2.4rem;
    }

    li {
      background: none;
      width: 1rem;
      height: 1rem;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      border: 2px solid #f5f8fa;

      &.slick-active {
        background: ${({ theme }) => theme.colors.white.main};
        border: none;
      }

      button {
        opacity: 0;
        cursor: pointer;
        background: transparent;
        border: none;
      }
    }
  }
`

export const Testimonial = styled.div`
  width: 50rem;
  height: 32rem;

  margin-right: 4rem;
`

export const TestimonialContent = styled.div`
  width: 100%;
  height: 24rem;
  padding: 2.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  background-color: ${({ theme }) => theme.colors.white.main};
  border-radius: 1rem;

  text-align: center;

  h4 {
    font-size: 1.8rem;
  }

  p {
    line-height: 2.4rem;
    font-size: 1.4rem;
  }
`

export const TestimonialInfo = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 2.4rem;

  .flex {
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }

  img {
    border-radius: 50%;
  }
`

export const Perfil = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;

  color: ${({ theme }) => theme.colors.white.main};

  strong {
    font-size: 1.4rem;
  }
`
