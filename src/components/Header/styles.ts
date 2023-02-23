import styled from 'styled-components'
import * as Dropdown from '@radix-ui/react-dropdown-menu'

export const Wrapper = styled.header``

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: ${({ theme }) => theme.container.app};
  margin: 0 auto;

  padding: 2.4rem;
`

export const NavList = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`

export const NavLink = styled.a`
  position: relative;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black.main};
  font-size: 1.8rem;
  font-weight: ${({ theme }) => theme.font.weight.medium};

  &::after {
    content: '';
    transition: all 0.2s ease-out;
    position: absolute;
    bottom: -0.8rem;
    left: 0;
    right: 0;
    height: 3px;
    opacity: 0;
  }

  &:hover {
    &::after {
      background-color: ${({ theme }) => theme.colors.primary.main};
      opacity: 1;
    }
  }

  /* &:hover {
    padding-bottom: 0.5rem;
    border-bottom: 3px solid red;
  } */
`

export const Profile = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  gap: 1.2rem;

  span {
    font-size: 1.8rem;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    color: ${({ theme }) => theme.colors.black.main};
  }

  .image {
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    width: 4rem;
    height: 4rem;
  }
`

export const DropdownTrigger = styled(Dropdown.Trigger)`
  margin-top: 0.4rem;

  border: none;
  background: none;
`
