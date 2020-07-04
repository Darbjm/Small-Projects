import React, { Component } from 'react'
import './app.scss'
import D3 from './d3/D3'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Yandex from './yandex/Yandex'
import ReactDOM from 'react-dom'
import Rotate from './rotate/Rotate'
import Art from './art/Art'

class App extends Component {
  state = {
    width: 0,
    height: 0
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  constructor(props) {
    super(props)
    this.state = { width: 0, height: 0 }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  renderChart = () => {
    const { width } = this.state
    if (width === 0) {
      return 'No data yet'
    }
    if (width % 2 === 0) {
      return <div><Route path='/rotate' component={Rotate} /></div>
    }
    return <Route path='/rotate' component={Rotate} />
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Yandex} />
          <Route path='/d3' component={D3} />
          <Route path='/art' component={Art} />
          {this.renderChart()}
        </Switch>
      </BrowserRouter>
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)