import styled from 'styled-components'

export const Wrapper = styled.div`
  /* width: 100%; */
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.white.main};

  padding: 0 2.4rem;

  display: flex;
  gap: 1.8rem;
  align-items: stretch;

  button {
    align-self: center;
    flex-direction: row;
  }
`

export const Divider = styled.hr`
  height: 100%;
  width: 0.2rem;
  background: #f5f8fa;
  border: 0;
`

export const SearchInput = styled.div`
  position: relative;

  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  height: 100%;

  padding: 1.6rem 0;
`

export const SearchInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;

  strong {
    font-size: 2.2rem;
  }

  p {
    color: rgba(24, 25, 31, 0.5);
    font-size: 1.6rem;
  }
`

export const ListContainer = styled.div`
  position: absolute;
  top: 10rem;
  right: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  height: auto;
  padding: 0.4rem;

  background: ${({ theme }) => theme.colors.white.main};
  box-shadow: 0px 10px 20px rgba(41, 41, 42, 0.07);
`

export const ListItem = styled.button`
  display: block;
  width: 100%;

  padding: 0.4rem 0.2rem;

  font-size: 1.6rem;
  border: none;
  background: none;
  transition: all 300ms ease-in-out 0s;

  &:hover {
    background: rgba(70, 70, 70, 0.09);
  }
`
