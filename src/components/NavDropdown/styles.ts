import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 21.6rem;
  padding: 0.6rem 0;

  background-color: ${({ theme }) => theme.colors.gray.lighter};
  border-radius: 0.5rem;
`

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  width: 100%;
  max-width: 21.6rem;
  padding: 1.2rem 2.4rem;

  text-decoration: none;

  transition: all 300ms ease-in-out 0s;

  &:hover {
    background: rgba(70, 70, 70, 0.09);
  }

  span {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.black.main};
  }
`
