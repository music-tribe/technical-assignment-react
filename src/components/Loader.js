import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

const OuterContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
`

const SVGContainer = styled.div`
  position: relative;
  margin: auto;
  width: ${props => props.width};
`

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
`

const Circular = styled.svg`
  animation: ${rotate} 2s linear infinite;
  transform-origin: center center;
  margin: auto;
`

const Circle = styled.circle`
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke: ${props => props.color};
  animation: ${dash} 1.5s ease-in-out infinite;
  stroke-linecap: round;
`

const Loader = ({ color = 'red', width = '100px' }) => (
  <OuterContainer>
    <SVGContainer width={width}>
      <Circular viewBox='25 25 50 50'>
        <Circle color={color} cx='50' cy='50' r='20' fill='none' strokeWidth='2.5' strokeMiterlimit='10' />
      </Circular>
    </SVGContainer>
  </OuterContainer>
)

Loader.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string
}

export default Loader
