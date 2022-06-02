import styled from 'styled-components'

export const Wrapper = styled.div``

export const Slider = styled.div`
  overflow: auto;
  display: flex;
  scroll-snap-type: x mandatory;

  .box {
    height: 200px;
    width: 200px;
    background: red;
    margin-right: 5px;
    flex-shrink: 0;
    scroll-snap-align: start;
  }
`

export const Dots = styled.div`
  display: flex;
  justify-content: center;

  .dot {
    all: unset;
    margin-right: 5px;
    height: 10px;
    width: 10px;
    border-radius: 10px;
    background: gray;
    margin-top: 10px;
  }
`
