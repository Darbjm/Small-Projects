import React, { Component } from 'react'
import D3BubbleChart from './BubbleChart'

export default class BubbleWrapper extends Component {
  componentDidMount() {
    this.setState({
      chart2: new D3BubbleChart(this.refs.chart2)
    })
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    return <div className="chart-area" ref="chart2"></div>
  }
}

