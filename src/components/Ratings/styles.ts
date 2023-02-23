import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`

type RatingProps = {
  shouldFill: boolean
}

export const Rating = styled.button<RatingProps>`
  background-color: transparent;
  border: none;

  svg {
    transition: all 0.1s linear;

    ${({ shouldFill }) => css`
      stroke: ${shouldFill && '#faaf00'};
      fill: ${shouldFill && '#faaf00'};
    `}

    &:hover {
      stroke: #faaf00;
      fill: #faaf00;
    }
  }
`
