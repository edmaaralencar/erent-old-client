import styled from 'styled-components'
import * as Dropdown from '@radix-ui/react-dropdown-menu'

export const Wrapper = styled(Dropdown.Content)`
  position: absolute;
  right: -2.5rem;
  top: 1.5rem;
  z-index: 10;

  width: 25rem;
  padding: 0.6rem 0;

  background-color: ${({ theme }) => theme.colors.gray.lighter};
  border-radius: 0.5rem;
`

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  width: 100%;
  padding: 1.2rem 2.4rem;

  text-decoration: none;
  border: none;
  background-color: ${({ theme }) => theme.colors.gray.lighter};

  transition: all 300ms ease-in-out 0s;

  &:hover {
    background: rgba(70, 70, 70, 0.09);
  }

  span {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.black.main};
  }
`
