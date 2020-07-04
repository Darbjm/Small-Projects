import React from 'react'

class Art extends React.Component {
  state = {
    canvas: {
      width: 400,
      height: 200
    }
  }

  componentDidMount() {
    const { width, height } = this.state.canvas
    this.canvasHex.width = width
    this.canvasHex.height = height


  }
  render() {
    return (
      <main>
        <section>
          <canvas ref={canvasHex => this.canvasHex = canvasHex }></canvas>
        </section>
      </main>
    )
  }
}

export default Art