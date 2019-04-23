import React from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

import styled from 'styled-components'

const Container = styled.div`
  z-index: 2;
`

class Navbar extends React.Component {
  render () {
    return (
      <Container>
        <Link to='/oasis'>Oasis</Link>
        <Link to='/jamiroquai'>Jamiroquai</Link>
        {/* <Link to='/drive'>Drive</Link>
        <Link to='/drive/shows'>Shows</Link>
        <Link to='/drive/presets'>Presets</Link> */}
      </Container>
    )
  }
}

export default connect()(Navbar)
