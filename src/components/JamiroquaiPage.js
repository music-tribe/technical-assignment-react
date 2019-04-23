import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { getJamiroquai, getJamiroquaiReleases } from '../redux/actions/jamiroquai'
import axios from 'axios'

const Title = styled.h1`

`

const Realnames = styled.h2`

`

const Profile = styled.p`

`
const Releases = styled.div`

`
const MoreInfo = styled.div`
  position: absolute;
  top: 100px;
  right: 100px;
  left: 100px;
  bottom: 100px;
  background: black;
  color: white;
  padding: 50px;
`

class JamiroquaiPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = { moreInfo: null }

    this.getMoreInfo = this.getMoreInfo.bind(this)
  }

  getMoreInfo (url) {
    axios.get(url).then(data => {
      this.setState({ moreInfo: data.data })
    })
  }

  componentDidMount () {
    this.props.dispatch(getJamiroquai())
  }
  render () {
    console.log(this.props)
    let profile = { data: {} }
    let releases = { data: {} }
    if (this.props.profile.data) profile = this.props.profile
    if (this.props.releases.data) releases = this.props.releases

    console.log(this.state.moreInfo)
    return (
      <div onClick={() => this.setState({ moreInfo: null })}>
        <Title>{profile.data.name}</Title>
        <Realnames>{profile.data.realname}</Realnames>
        <Profile>{profile.data.profile}</Profile>
        <h3>Releases:</h3>
        <Releases>
          {!releases.success && <button onClick={() => this.props.dispatch(getJamiroquaiReleases(profile.data.releases_url))}>Get Releases</button>}
          {releases.success && <ul>
            {releases.data.releases.map((release, i) => <li key={i}>
              <span>{release.title} - {release.year}</span><button onClick={() => this.getMoreInfo(release.resource_url)}>Get more info</button>
            </li>)}
          </ul>}
        </Releases>
        {this.state.moreInfo && <MoreInfo>
          <h3>{this.state.moreInfo.title} - {this.state.moreInfo.year}</h3>
          <h5>Lowest price: {this.state.moreInfo.lowest_price}</h5>
          <h5>Number for sale: {this.state.moreInfo.num_for_sale}</h5>
          <p>{this.state.moreInfo.notes}</p>
        </MoreInfo>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state.jamiroquai
})

export default connect(mapStateToProps)(JamiroquaiPage)
