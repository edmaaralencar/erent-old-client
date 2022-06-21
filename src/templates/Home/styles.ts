import styled from 'styled-components'

export const Wrapper = styled.div``

export const Hero = styled.section`
  position: relative;

  height: calc(100vh - 9rem);

  padding: 0 2.4rem;
  margin-top: 9rem;

  background-color: ${({ theme }) => theme.colors.gray.lighter};

  .square {
    position: absolute;
    top: -9rem;
    right: 0;
    z-index: 1;

    width: 44.7rem;
    height: 56.7rem;

    background-color: ${({ theme }) => theme.colors.primary.main};
  }
`

export const Container = styled.div`
  position: relative;

  max-width: ${({ theme }) => theme.container};
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .image {
    position: relative;
    width: 53rem;
    height: 48rem;
    /* right: 0; */
    /* top: 11.2rem; */
    z-index: 2;

    @media (max-width: 1200px) {
      width: 54rem;
      height: 50rem;
      /* right: 0; */
      /* top: 11.2rem; */
      z-index: 2;
    }
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
`

export const SearchContainer = styled.form`
  width: 100%;
  max-width: 69.2rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.white.main};
`

// export const Slider = styled.div`
//   overflow: auto;
//   display: flex;
//   scroll-snap-type: x mandatory;

//   .box {
//     height: 200px;
//     width: 200px;
//     background: red;
//     margin-right: 5px;
//     flex-shrink: 0;
//     scroll-snap-align: start;
//   }
// `

// export const Dots = styled.div`
//   display: flex;
//   justify-content: center;

//   .dot {
//     all: unset;
//     margin-right: 5px;
//     height: 10px;
//     width: 10px;
//     border-radius: 10px;
//     background: gray;
//     margin-top: 10px;
//   }
// `
