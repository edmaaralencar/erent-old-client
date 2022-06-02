import styled, { css } from 'styled-components'

type ModalOpen = {
  isModalOpen: boolean
}

export const Backdrop = styled.div<ModalOpen>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;

  display: ${({ isModalOpen }) => (isModalOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.6);
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 44.6rem;
  width: 44.6rem;

  background-color: ${({ theme }) => theme.colors.gray.lighter};
  border-radius: 0.5rem;
`

export const ImageContainer = styled.div`
  margin-bottom: 4rem;
`

export const Description = styled.p`
  ${({ theme }) => css`
    margin: 3.2rem;

    color: ${theme.colors.gray.dark};
    font-weight: ${theme.font.weight.light};
    font-size: 1.8rem;
    text-align: center;
  `}
`
