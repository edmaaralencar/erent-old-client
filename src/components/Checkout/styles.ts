import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  width: 100%;
  max-width: 41.5rem;
  padding: 4.4rem 6rem;

  background-color: ${({ theme }) => theme.colors.gray.lighter};
  border-radius: 0.8rem;

  h4 {
    color: ${({ theme }) => theme.colors.primary.main};
    font-weight: ${({ theme }) => theme.font.weight.semibold};
    font-size: 3.6rem;

    span {
      font-size: 2.4rem;
    }
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`
