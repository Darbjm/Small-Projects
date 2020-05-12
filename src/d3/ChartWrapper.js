import React, { Component } from 'react'
import D3Chart from './D3Chart'
import D3Chart2 from './D3Chart2'

export default class ChartWrapper extends Component {
  componentDidMount() {
    this.setState({
      barchart: new D3Chart2(this.refs.chart2),
      chart: new D3Chart(this.refs.chart1, this.props.data, this.props.updateName)
    })
  }

  shouldComponentUpdate() {
    return false
  }

  componentWillReceiveProps(nextProps) {
    this.state.chart.update(nextProps.data)
    this.state.barchart.update(nextProps.gender)
  }

  render() {
    return (
      <div>
        <div className="chart-area" ref="chart1"></div>
        <hr />
        <h4>Updating a chart via user input</h4>
        <div ref='chart2'></div>
      </div>
    )
  }
}