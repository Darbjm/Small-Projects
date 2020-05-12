
import * as d3 from 'd3'
import Boot from './images/bootstrap-4.svg'
import adobe from './images/adobe-2.svg'
import post from './images/postgresql.svg'
import python from './images/python-5.svg'
import react from './images/react.svg'
import sass from './images/sass-1.svg'
import web from './images/webpack-icon.svg'

const width = 800
const height = 650 

const data = [
  {
    logo: Boot
  },
  {
    logo: adobe
  },
  {
    logo: post
  },
  {
    logo: python
  },
  {
    logo: react
  },
  {
    logo: sass
  },
  {
    logo: web
  }
]

class D3BubbleChart {
  constructor(element) {

    const svg = d3.select(element)
      .append('svg')
      .attr('width', width)
      .attr('height', height)

    const images = svg.selectAll('.logos')
      .data(data)
      .enter().append('image')
      .attr('class', 'logos')
      .attr('xlink:href', d => d.logo)
      .attr('width', 60)
      .attr('height', 60)
      .attr('x', width / 2 - 15)
      .attr('y', height / 2 - 15)

    const vis = this

    d3.forceSimulation(data)
      .force('charge', d3.forceManyBody().strength(-60))
      .force('center', d3.forceCenter(width / 2 - 10, height / 2 - 10))
      .on('tick', ticked)
      .velocityDecay(0.2)
  		.force('x', d3.forceX().strength(0.002))
      .force('y', d3.forceY().strength(0.002))
      .force('collide', d3.forceCollide().radius(d => d.r + 0.5).iterations(2))
  		.force('center',
        d3.forceCenter(width / 2, height / 2))
      .on('tick', ticked)

    function ticked() {
      images.attr('cx', d => d.x)
        .attr('cy', d => d.y)
      vis.g = d3.select(element)
        .selectAll('image')
        .data(data)
  
      vis.g.enter()
        .merge(vis.g)
        .attr('x', function(d) {
          return d.x
        })
        .attr('y', function(d) {
          return d.y
        })
      vis.g.exit().remove()
    }

    d3.select('image')
      .call(d3.drag()
        .on('start', started))

    function started() {
      var circle = d3.select(this).classed('dragging', true)
      console.log(this)
   
      d3.event.on('drag', dragged).on('end', ended)
   
      function dragged(d) {
        console.log(d)
        circle.raise().attr('x', d.x = d3.event.x).attr('y', d.y = d3.event.y)
      }
   
      function ended() {
        circle.classed('dragging', false)
      }
    }

  }

}

export default D3BubbleChart
