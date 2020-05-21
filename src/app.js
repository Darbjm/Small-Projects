import React, { Component } from 'react'
import './app.scss'
import D3 from './d3/D3'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Yandex from './yandex/Yandex'
import ReactDOM from 'react-dom'
import Rotate from './rotate/Rotate'




class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Yandex} />
          <Route path="/d3" component={D3} />
          <Route path="/rotate" component={Rotate} />
        </Switch>
      </BrowserRouter>
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)