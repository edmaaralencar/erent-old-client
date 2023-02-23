import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  max-width: ${({ theme }) => theme.container.app};
  margin: 0 auto;

  padding: 2.4rem;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 32.2rem 1fr;
  gap: 5.6rem;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    gap: 2.4rem;
  }
`

export const Navbar = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;

    @media (max-width: 1000px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 540px) {
      grid-template-columns: 1fr;
    }
  }
`

type NavLinkProps = {
  active: boolean
}

export const NavLink = styled.li<NavLinkProps>`
  padding: 2rem;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.primary.main : theme.colors.gray.lighter};
  width: 100%;

  transition: background-color 0.1s ease-out;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.main};

    a,
    button {
      color: ${({ theme }) => theme.colors.white.main};
    }

    .icon {
      color: ${({ theme }) => theme.colors.white.main} !important;
    }
  }

  a,
  button {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    font-size: 1.8rem;
    text-decoration: none;
    background: transparent;
    border: none;

    color: ${({ theme, active }) =>
      active ? theme.colors.white.main : theme.colors.black.main};
  }
`

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 2.4rem;

  background-color: ${({ theme }) => theme.colors.gray.lighter};

  h2 {
    position: relative;
    font-size: 1.8rem;
    font-weight: ${({ theme }) => theme.font.weight.semibold};
    width: fit-content;

    &::before {
      content: '';
      position: absolute;
      right: 40%;
      left: 0;
      height: 0.3rem;
      bottom: -1rem;
      background-color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`
