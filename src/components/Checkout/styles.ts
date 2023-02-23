import styled from 'styled-components'

export const Wrapper = styled.form`
  position: sticky !important;
  top: 32px;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  /* width: 100%; */
  width: 41.5rem;
  height: 41.5rem;
  padding: 4.4rem;

  background-color: ${({ theme }) => theme.colors.gray.lighter};
  border-radius: 0.8rem;

  .button {
    max-width: initial;
    padding: 2.2rem;
  }

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

export const Values = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`

export const Value = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.gray.darker};
  }
`

export const HorizontalLine = styled.hr`
  height: 0.2rem;
  background: #d0d0d3;
  width: 100%;
`
