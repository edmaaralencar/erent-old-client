import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.container};

  margin: 0 auto;
  padding: 0 3.2rem;
`

export const Textarea = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => css`
    label {
      font-size: 2.2rem;

      margin-bottom: 1.6rem;
      color: ${theme.colors.primary.dark};
    }

    textarea {
      width: 100%;
      height: 18rem;
      padding: 2.2rem 2.4rem;

      resize: none;
      outline: none;
      border-radius: 0.5rem;
      font-size: 1.6rem;
      border: none;
      background-color: ${theme.colors.gray.lighter};

      &::placeholder {
        color: ${theme.colors.gray.main};
        font-weight: ${theme.font.weight.medium};
      }
    }

    .error {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      margin-top: 1rem;

      font-size: 1.3rem;
      color: ${theme.colors.red.main};
    }
  `}
`

export const Upload = styled.div`
  display: flex;
  flex-direction: column;

  .upload-label {
    font-size: 2.2rem;
    margin-bottom: 1.6rem;
    color: ${({ theme }) => theme.colors.primary.dark};
  }

  .upload-button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 16rem;

    color: ${({ theme }) => theme.colors.primary.main};
    background-color: ${({ theme }) => theme.colors.gray.lighter};
    font-size: 1.6rem;

    border-radius: 1.6rem;
    border: 2px dashed #dce2e6;

    cursor: pointer;
  }
`

export const ListImages = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-left: 1.55rem;

  li {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.primary.dark};
  }
`

export const OptionsContainer = styled.div``

export const OptionButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2.2rem 2.4rem;

  outline: none;
  border-radius: 0.5rem;
  font-size: 1.6rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.gray.lighter};
`

type OptionsProps = {
  showOptions: boolean
}

export const Options = styled.ul<OptionsProps>`
  display: ${({ showOptions }) => (showOptions ? 'flex' : 'none')};
  align-items: center;
  gap: 1.6rem;
  flex-wrap: wrap;
  padding: 1.6rem;
  margin-top: 0.5rem;

  background-color: ${({ theme }) => theme.colors.gray.lighter};
  border-radius: 0.5rem 0.5rem 0 0;
`

type OptionProps = {
  isOptionSelected: boolean
}

export const Option = styled.button<OptionProps>`
  ${({ theme, isOptionSelected }) => css`
    padding: 0.8rem;

    outline: none;
    border: none;
    border-radius: 0.8rem;

    background-color: ${theme.colors.white.main};
    color: ${theme.colors.gray.main};
    font-weight: ${theme.font.weight.light};
    font-size: 1.6rem;

    ${isOptionSelected &&
    css`
      background: #b9b9b9;
      color: ${theme.colors.white.main};
    `}
  `}
`
