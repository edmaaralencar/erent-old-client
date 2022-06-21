import styled from 'styled-components'

export const Wrapper = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: ${({ theme }) => theme.container};
  margin: 0 auto;

  padding: 2.4rem;
`

export const NavList = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`

export const NavLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black.main};
  font-size: 1.8rem;
  font-weight: ${({ theme }) => theme.font.weight.medium};
`

export const Profile = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  span {
    font-size: 1.8rem;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    color: ${({ theme }) => theme.colors.black.main};
  }
`
