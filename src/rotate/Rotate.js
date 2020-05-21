import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import G from './images/G.svg'
import A from './images/A.svg'
import B from './images/B.svg'
import R from './images/R.svg'
import I from './images/I.svg'
import E from './images/E.svg'
import L from './images/L.svg'

class Rotate extends Component {
  constructor() {
    super()

    this.box = null

    this.state = {
      angle: 0,
      angleTwo: 0,
      angle3: 0,
      angle4: 0,
      angle5: 0,
      angle6: 0,
      angle7: 0,
      angle8: 0,
      angle9: 0,
      angle10: 0,
      angle11: 0,
      angle12: 0,
      angle13: 0,
      angle14: 0,
      angle15: 0,
      angle16: 0,
      angle17: 0,
      angle18: 0,
      angle19: 0,
      angle20: 0,
      angle21: 0,

      startAngle: 90,
      currentAngle: 0,
      boxCenterPoint: {},
      boxCenterPointtwo: {},
      boxCenterPoint3: {},
      boxCenterPoint4: {},
      boxCenterPoint5: {},
      boxCenterPoint6: {},
      boxCenterPoint7: {},
      boxCenterPoint8: {},
      boxCenterPoint9: {},
      boxCenterPoint10: {},
      boxCenterPoint11: {},
      boxCenterPoint12: {},
      boxCenterPoint13: {},
      boxCenterPoint14: {},
      boxCenterPoint15: {},
      boxCenterPoint16: {},
      boxCenterPoint17: {},
      boxCenterPoint18: {},
      boxCenterPoint19: {},
      boxCenterPoint20: {},
      boxCenterPoint21: {}
    }
    this.getPositionFromCenter = this.getPositionFromCenter.bind(this)
    this.mouseMoveHandler = this.mouseMoveHandler.bind(this)
  }

  // method to get the positionof the pointer event relative to the center of the box
  getPositionFromCenter(e) {
    const { boxCenterPoint } = this.state
    const fromBoxCenter = {
      x: e.clientX - boxCenterPoint.x,
      y: -(e.clientY - boxCenterPoint.y)
    }
    return fromBoxCenter
  }

  getPositionFromCentertwo(e) {
    const { boxCenterPointtwo } = this.state
  
    const fromBoxCentertwo = {
      x: e.clientX - boxCenterPointtwo.x,
      y: -(e.clientY - boxCenterPointtwo.y)
    }
    return fromBoxCentertwo
  }

  getPositionFromCenter3(e) {
    const { boxCenterPoint3 } = this.state
  
    const fromBoxCenter3 = {
      x: e.clientX - boxCenterPoint3.x,
      y: -(e.clientY - boxCenterPoint3.y)
    }
    return fromBoxCenter3
  }

  getPositionFromCenter4(e) {
    const { boxCenterPoint4 } = this.state
  
    const fromBoxCenter4 = {
      x: e.clientX - boxCenterPoint4.x,
      y: -(e.clientY - boxCenterPoint4.y)
    }
    return fromBoxCenter4
  }

  getPositionFromCenter5(e) {
    const { boxCenterPoint5 } = this.state
  
    const fromBoxCenter5 = {
      x: e.clientX - boxCenterPoint5.x,
      y: -(e.clientY - boxCenterPoint5.y)
    }
    return fromBoxCenter5
  }

  getPositionFromCenter6(e) {
    const { boxCenterPoint6 } = this.state
  
    const fromBoxCenter6 = {
      x: e.clientX - boxCenterPoint6.x,
      y: -(e.clientY - boxCenterPoint6.y)
    }
    return fromBoxCenter6
  }

  getPositionFromCenter7(e) {
    const { boxCenterPoint7 } = this.state
  
    const fromBoxCenter7 = {
      x: e.clientX - boxCenterPoint7.x,
      y: -(e.clientY - boxCenterPoint7.y)
    }
    return fromBoxCenter7
  }

  getPositionFromCenter8(e) {
    const { boxCenterPoint8 } = this.state
  
    const fromBoxCenter8 = {
      x: e.clientX - boxCenterPoint8.x,
      y: -(e.clientY - boxCenterPoint8.y)
    }
    return fromBoxCenter8
  }

  getPositionFromCenter9(e) {
    const { boxCenterPoint9 } = this.state
  
    const fromBoxCenter9 = {
      x: e.clientX - boxCenterPoint9.x,
      y: -(e.clientY - boxCenterPoint9.y)
    }
    return fromBoxCenter9
  }

  getPositionFromCenter10(e) {
    const { boxCenterPoint10 } = this.state
  
    const fromBoxCenter10 = {
      x: e.clientX - boxCenterPoint10.x,
      y: -(e.clientY - boxCenterPoint10.y)
    }
    return fromBoxCenter10
  }

  getPositionFromCenter11(e) {
    const { boxCenterPoint11 } = this.state
  
    const fromBoxCenter11 = {
      x: e.clientX - boxCenterPoint11.x,
      y: -(e.clientY - boxCenterPoint11.y)
    }
    return fromBoxCenter11
  }

  getPositionFromCenter12(e) {
    const { boxCenterPoint12 } = this.state
  
    const fromBoxCenter12 = {
      x: e.clientX - boxCenterPoint12.x,
      y: -(e.clientY - boxCenterPoint12.y)
    }
    return fromBoxCenter12
  }

  getPositionFromCenter13(e) {
    const { boxCenterPoint13 } = this.state
  
    const fromBoxCenter13 = {
      x: e.clientX - boxCenterPoint13.x,
      y: -(e.clientY - boxCenterPoint13.y)
    }
    return fromBoxCenter13
  }

  getPositionFromCenter14(e) {
    const { boxCenterPoint14 } = this.state
  
    const fromBoxCenter14 = {
      x: e.clientX - boxCenterPoint14.x,
      y: -(e.clientY - boxCenterPoint14.y)
    }
    return fromBoxCenter14
  }

  getPositionFromCenter15(e) {
    const { boxCenterPoint15 } = this.state
  
    const fromBoxCenter15 = {
      x: e.clientX - boxCenterPoint15.x,
      y: -(e.clientY - boxCenterPoint15.y)
    }
    return fromBoxCenter15
  }

  getPositionFromCenter16(e) {
    const { boxCenterPoint16 } = this.state
  
    const fromBoxCenter16 = {
      x: e.clientX - boxCenterPoint16.x,
      y: -(e.clientY - boxCenterPoint16.y)
    }
    return fromBoxCenter16
  }

  getPositionFromCenter17(e) {
    const { boxCenterPoint17 } = this.state
  
    const fromBoxCenter17 = {
      x: e.clientX - boxCenterPoint17.x,
      y: -(e.clientY - boxCenterPoint17.y)
    }
    return fromBoxCenter17
  }

  getPositionFromCenter18(e) {
    const { boxCenterPoint18 } = this.state
  
    const fromBoxCenter18 = {
      x: e.clientX - boxCenterPoint18.x,
      y: -(e.clientY - boxCenterPoint18.y)
    }
    return fromBoxCenter18
  }

  getPositionFromCenter19(e) {
    const { boxCenterPoint19 } = this.state
  
    const fromBoxCenter19 = {
      x: e.clientX - boxCenterPoint19.x,
      y: -(e.clientY - boxCenterPoint19.y)
    }
    return fromBoxCenter19
  }

  getPositionFromCenter20(e) {
    const { boxCenterPoint20 } = this.state
  
    const fromBoxCenter20 = {
      x: e.clientX - boxCenterPoint20.x,
      y: -(e.clientY - boxCenterPoint20.y)
    }
    return fromBoxCenter20
  }

  getPositionFromCenter21(e) {
    const { boxCenterPoint21 } = this.state
  
    const fromBoxCenter21 = {
      x: e.clientX - boxCenterPoint21.x,
      y: -(e.clientY - boxCenterPoint21.y)
    }
    return fromBoxCenter21
  }



  mouseMoveHandler(e) {
    const { currentAngle, startAngle } = this.state
    const fromBoxCenter = this.getPositionFromCenter(e)
    const fromBoxCentertwo = this.getPositionFromCentertwo(e)
    const fromBoxCenter3 = this.getPositionFromCenter3(e)
    const fromBoxCenter4 = this.getPositionFromCenter4(e)
    const fromBoxCenter5 = this.getPositionFromCenter5(e)
    const fromBoxCenter6 = this.getPositionFromCenter6(e)
    const fromBoxCenter7 = this.getPositionFromCenter7(e)
    const fromBoxCenter8 = this.getPositionFromCenter8(e)
    const fromBoxCenter9 = this.getPositionFromCenter9(e)
    const fromBoxCenter10 = this.getPositionFromCenter10(e)
    const fromBoxCenter11 = this.getPositionFromCenter11(e)
    const fromBoxCenter12 = this.getPositionFromCenter12(e)
    const fromBoxCenter13 = this.getPositionFromCenter13(e)
    const fromBoxCenter14 = this.getPositionFromCenter14(e)
    const fromBoxCenter15 = this.getPositionFromCenter15(e)
    const fromBoxCenter16 = this.getPositionFromCenter16(e)
    const fromBoxCenter17 = this.getPositionFromCenter17(e)
    const fromBoxCenter18 = this.getPositionFromCenter18(e)
    const fromBoxCenter19 = this.getPositionFromCenter19(e)
    const fromBoxCenter20 = this.getPositionFromCenter20(e)
    const fromBoxCenter21 = this.getPositionFromCenter21(e)



    const newAngle =
        90 - Math.atan2(fromBoxCenter.y, fromBoxCenter.x) * (180 / Math.PI)

    const newAngleTwo = 
        90 - Math.atan2(fromBoxCentertwo.y, fromBoxCentertwo.x) * (180 / Math.PI)

    const newAngle3 = 
        90 - Math.atan2(fromBoxCenter3.y, fromBoxCenter3.x) * (180 / Math.PI)

    const newAngle4 = 
        90 - Math.atan2(fromBoxCenter4.y, fromBoxCenter4.x) * (180 / Math.PI)

    const newAngle5 = 
        90 - Math.atan2(fromBoxCenter5.y, fromBoxCenter5.x) * (180 / Math.PI)
        
    const newAngle6 = 
        90 - Math.atan2(fromBoxCenter6.y, fromBoxCenter6.x) * (180 / Math.PI)
        
    const newAngle7 = 
        90 - Math.atan2(fromBoxCenter7.y, fromBoxCenter7.x) * (180 / Math.PI)
        
    const newAngle8 = 
        90 - Math.atan2(fromBoxCenter8.y, fromBoxCenter8.x) * (180 / Math.PI)
        
    const newAngle9 = 
        90 - Math.atan2(fromBoxCenter9.y, fromBoxCenter9.x) * (180 / Math.PI)
        
    const newAngle10 = 
        90 - Math.atan2(fromBoxCenter10.y, fromBoxCenter10.x) * (180 / Math.PI)
        
    const newAngle11 = 
        90 - Math.atan2(fromBoxCenter11.y, fromBoxCenter11.x) * (180 / Math.PI)
        
    const newAngle12 = 
        90 - Math.atan2(fromBoxCenter12.y, fromBoxCenter12.x) * (180 / Math.PI)
        
    const newAngle13 = 
        90 - Math.atan2(fromBoxCenter13.y, fromBoxCenter13.x) * (180 / Math.PI)
        
    const newAngle14 = 
        90 - Math.atan2(fromBoxCenter14.y, fromBoxCenter14.x) * (180 / Math.PI)
        
    const newAngle15 = 
        90 - Math.atan2(fromBoxCenter15.y, fromBoxCenter15.x) * (180 / Math.PI)
        
    const newAngle16 = 
        90 - Math.atan2(fromBoxCenter16.y, fromBoxCenter16.x) * (180 / Math.PI)
        
    const newAngle17 = 
        90 - Math.atan2(fromBoxCenter17.y, fromBoxCenter17.x) * (180 / Math.PI)
        
    const newAngle18 = 
        90 - Math.atan2(fromBoxCenter18.y, fromBoxCenter18.x) * (180 / Math.PI)
        
    const newAngle19 = 
        90 - Math.atan2(fromBoxCenter19.y, fromBoxCenter19.x) * (180 / Math.PI)
        
    const newAngle20 = 
        90 - Math.atan2(fromBoxCenter20.y, fromBoxCenter20.x) * (180 / Math.PI)

    const newAngle21 = 
        90 - Math.atan2(fromBoxCenter21.y, fromBoxCenter21.x) * (180 / Math.PI)
        



    this.box.style.transform =
        'rotate(' +
        (currentAngle + (newAngle - (startAngle ? startAngle : 0))) +
        'deg)'
        
    this.boxtwo.style.transform =
        'rotate(' +
        (currentAngle + (newAngleTwo - (startAngle ? startAngle : 0))) +
        'deg)'
    
    this.box3.style.transform =
        'rotate(' +
        (currentAngle + (newAngle3 - (startAngle ? startAngle : 0))) +
        'deg)'

    this.box4.style.transform =
        'rotate(' +
        (currentAngle + (newAngle4 - (startAngle ? startAngle : 0))) +
        'deg)'

    this.box5.style.transform =
        'rotate(' +
        (currentAngle + (newAngle5 - (startAngle ? startAngle : 0))) +
        'deg)'

    this.box6.style.transform =
        'rotate(' +
        (currentAngle + (newAngle6 - (startAngle ? startAngle : 0))) +
        'deg)'

    this.box7.style.transform =
        'rotate(' +
        (currentAngle + (newAngle7 - (startAngle ? startAngle : 0))) +
        'deg)'

    this.box8.style.transform =
        'rotate(' +
        (currentAngle + (newAngle8 - (startAngle ? startAngle : 0))) +
        'deg)'

    this.box9.style.transform =
        'rotate(' +
        (currentAngle + (newAngle9 - (startAngle ? startAngle : 0))) +
        'deg)'

    this.box10.style.transform =
        'rotate(' +
        (currentAngle + (newAngle10 - (startAngle ? startAngle : 0))) +
        'deg)'

    this.box11.style.transform =
        'rotate(' +
        (currentAngle + (newAngle11 - (startAngle ? startAngle : 0))) +
        'deg)'

    this.box12.style.transform =
        'rotate(' +
        (currentAngle + (newAngle12 - (startAngle ? startAngle : 0))) +
        'deg)'

    this.box13.style.transform =
        'rotate(' +
        (currentAngle + (newAngle13 - (startAngle ? startAngle : 0))) +
        'deg)'

    this.box14.style.transform =
        'rotate(' +
        (currentAngle + (newAngle14 - (startAngle ? startAngle : 0))) +
        'deg)'

    this.box15.style.transform =
        'rotate(' +
        (currentAngle + (newAngle15 - (startAngle ? startAngle : 0))) +
        'deg)'

    this.box16.style.transform =
        'rotate(' +
        (currentAngle + (newAngle16 - (startAngle ? startAngle : 0))) +
        'deg)'

    this.box17.style.transform =
        'rotate(' +
        (currentAngle + (newAngle17 - (startAngle ? startAngle : 0))) +
        'deg)'

    this.box18.style.transform =
        'rotate(' +
        (currentAngle + (newAngle18 - (startAngle ? startAngle : 0))) +
        'deg)'

    this.box19.style.transform =
        'rotate(' +
        (currentAngle + (newAngle19 - (startAngle ? startAngle : 0))) +
        'deg)'

    this.box20.style.transform =
        'rotate(' +
        (currentAngle + (newAngle20 - (startAngle ? startAngle : 0))) +
        'deg)'

    this.box21.style.transform =
        'rotate(' +
        (currentAngle + (newAngle21 - (startAngle ? startAngle : 0))) +
        'deg)'

    this.setState({ angle: newAngle, 
      angletwo: newAngleTwo, 
      angle3: newAngle3, 
      angle4: newAngle4,
      angle5: newAngle5, 
      angle6: newAngle6,
      angle7: newAngle7, 
      angle8: newAngle8,
      angle9: newAngle9, 
      angle10: newAngle10,
      angle11: newAngle11, 
      angle12: newAngle12,
      angle13: newAngle13, 
      angle14: newAngle14,
      angle15: newAngle15, 
      angle16: newAngle16,
      angle17: newAngle17, 
      angle18: newAngle18,
      angle19: newAngle19, 
      angle20: newAngle20,
      angle21: newAngle21
    })

  }

  componentDidMount() {
    const boxPosition = this.box.getBoundingClientRect()
    const boxCenterX = boxPosition.left + boxPosition.width / 2
    const boxCenterY = boxPosition.top + boxPosition.height / 2
    this.setState({
      boxCenterPoint: { x: boxCenterX, y: boxCenterY }
    })

    const boxPositiontwo = this.boxtwo.getBoundingClientRect()
    const boxCenterXtwo = boxPositiontwo.left + boxPositiontwo.width / 2
    const boxCenterYtwo = boxPositiontwo.top + boxPositiontwo.height / 2
    this.setState({
      boxCenterPointtwo: { x: boxCenterXtwo, y: boxCenterYtwo }
    })

    const boxPosition3 = this.box3.getBoundingClientRect()
    const boxCenterX3 = boxPosition3.left + boxPosition3.width / 2
    const boxCenterY3 = boxPosition3.top + boxPosition3.height / 2
    this.setState({
      boxCenterPoint3: { x: boxCenterX3, y: boxCenterY3 }
    })

    const boxPosition4 = this.box4.getBoundingClientRect()
    const boxCenterX4 = boxPosition4.left + boxPosition4.width / 2
    const boxCenterY4 = boxPosition4.top + boxPosition4.height / 2
    this.setState({
      boxCenterPoint4: { x: boxCenterX4, y: boxCenterY4 }
    })

    const boxPosition5 = this.box5.getBoundingClientRect()
    const boxCenterX5 = boxPosition5.left + boxPosition5.width / 2
    const boxCenterY5 = boxPosition5.top + boxPosition5.height / 2
    this.setState({
      boxCenterPoint5: { x: boxCenterX5, y: boxCenterY5 }
    })

    const boxPosition6 = this.box6.getBoundingClientRect()
    const boxCenterX6 = boxPosition6.left + boxPosition6.width / 2
    const boxCenterY6 = boxPosition6.top + boxPosition6.height / 2
    this.setState({
      boxCenterPoint6: { x: boxCenterX6, y: boxCenterY6 }
    })

    const boxPosition7 = this.box7.getBoundingClientRect()
    const boxCenterX7 = boxPosition7.left + boxPosition7.width / 2
    const boxCenterY7 = boxPosition7.top + boxPosition7.height / 2
    this.setState({
      boxCenterPoint7: { x: boxCenterX7, y: boxCenterY7 }
    })

    const boxPosition8 = this.box8.getBoundingClientRect()
    const boxCenterX8 = boxPosition8.left + boxPosition8.width / 2
    const boxCenterY8 = boxPosition8.top + boxPosition8.height / 2
    this.setState({
      boxCenterPoint8: { x: boxCenterX8, y: boxCenterY8 }
    })

    const boxPosition9 = this.box9.getBoundingClientRect()
    const boxCenterX9 = boxPosition9.left + boxPosition9.width / 2
    const boxCenterY9 = boxPosition9.top + boxPosition9.height / 2
    this.setState({
      boxCenterPoint9: { x: boxCenterX9, y: boxCenterY9 }
    })

    const boxPosition10 = this.box10.getBoundingClientRect()
    const boxCenterX10 = boxPosition10.left + boxPosition10.width / 2
    const boxCenterY10 = boxPosition10.top + boxPosition10.height / 2
    this.setState({
      boxCenterPoint10: { x: boxCenterX10, y: boxCenterY10 }
    })

    const boxPosition11 = this.box11.getBoundingClientRect()
    const boxCenterX11 = boxPosition11.left + boxPosition11.width / 2
    const boxCenterY11 = boxPosition11.top + boxPosition11.height / 2
    this.setState({
      boxCenterPoint11: { x: boxCenterX11, y: boxCenterY11 }
    })

    const boxPosition12 = this.box12.getBoundingClientRect()
    const boxCenterX12 = boxPosition12.left + boxPosition12.width / 2
    const boxCenterY12 = boxPosition12.top + boxPosition12.height / 2
    this.setState({
      boxCenterPoint12: { x: boxCenterX12, y: boxCenterY12 }
    })

    const boxPosition13 = this.box13.getBoundingClientRect()
    const boxCenterX13 = boxPosition13.left + boxPosition13.width / 2
    const boxCenterY13 = boxPosition13.top + boxPosition13.height / 2
    this.setState({
      boxCenterPoint13: { x: boxCenterX13, y: boxCenterY13 }
    })

    const boxPosition14 = this.box14.getBoundingClientRect()
    const boxCenterX14 = boxPosition14.left + boxPosition14.width / 2
    const boxCenterY14 = boxPosition14.top + boxPosition14.height / 2
    this.setState({
      boxCenterPoint14: { x: boxCenterX14, y: boxCenterY14 }
    })

    const boxPosition15 = this.box15.getBoundingClientRect()
    const boxCenterX15 = boxPosition15.left + boxPosition15.width / 2
    const boxCenterY15 = boxPosition15.top + boxPosition15.height / 2
    this.setState({
      boxCenterPoint15: { x: boxCenterX15, y: boxCenterY15 }
    })

    const boxPosition16 = this.box16.getBoundingClientRect()
    const boxCenterX16 = boxPosition16.left + boxPosition16.width / 2
    const boxCenterY16 = boxPosition16.top + boxPosition16.height / 2
    this.setState({
      boxCenterPoint16: { x: boxCenterX16, y: boxCenterY16 }
    })

    const boxPosition18 = this.box18.getBoundingClientRect()
    const boxCenterX18 = boxPosition18.left + boxPosition18.width / 2
    const boxCenterY18 = boxPosition18.top + boxPosition18.height / 2
    this.setState({
      boxCenterPoint18: { x: boxCenterX18, y: boxCenterY18 }
    })

    const boxPosition19 = this.box19.getBoundingClientRect()
    const boxCenterX19 = boxPosition19.left + boxPosition19.width / 2
    const boxCenterY19 = boxPosition19.top + boxPosition19.height / 2
    this.setState({
      boxCenterPoint19: { x: boxCenterX19, y: boxCenterY19 }
    })

    const boxPosition20 = this.box20.getBoundingClientRect()
    const boxCenterX20 = boxPosition20.left + boxPosition20.width / 2
    const boxCenterY20 = boxPosition20.top + boxPosition20.height / 2
    this.setState({
      boxCenterPoint20: { x: boxCenterX20, y: boxCenterY20 }
    })

    const boxPosition21 = this.box21.getBoundingClientRect()
    const boxCenterX21 = boxPosition21.left + boxPosition21.width / 2
    const boxCenterY21 = boxPosition21.top + boxPosition21.height / 2
    this.setState({
      boxCenterPoint21: { x: boxCenterX21, y: boxCenterY21 }
    })

    window.onmouseup = this.mouseUpHandler

    window.onmousemove = this.mouseMoveHandler
  }

  render() {
    return (
      <main>
        <section>
          <div className='prev'><Link className='button is-rounded' to='/d3'> Previous</Link></div>
          <div className='rotate'>
            <div>
              <img
                className='box'
                ref={img => (this.box = img)}
                src={G}
              />
              <img
                className='box'
                ref={img => (this.boxtwo = img)}
                src={A}
              />
              <img
                className='box'
                ref={img => (this.box3 = img)}
                src={B}
              />
              <img
                className='box'
                ref={img => (this.box4 = img)}
                src={R}
              />
              <img
                className='box'
                ref={img => (this.box5 = img)}
                src={I}
              />
              <img
                className='box'
                ref={img => (this.box6 = img)}
                src={E}
              />
              <img
                className='box'
                ref={img => (this.box7 = img)}
                src={L}
              />
            </div>
            <div>
              <img
                className='box'
                ref={img => (this.box8 = img)}
                src={G}
              />
              <img
                className='box'
                ref={img => (this.box9 = img)}
                src={A}
              />
              <img
                className='box'
                ref={img => (this.box10 = img)}
                src={B}
              />
              <img
                className='box'
                ref={img => (this.box11 = img)}
                src={R}
              />
              <img
                className='box'
                ref={img => (this.box12 = img)}
                src={I}
              />
              <img
                className='box'
                ref={img => (this.box13 = img)}
                src={E}
              />
              <img
                className='box'
                ref={img => (this.box14 = img)}
                src={L}
              />
            </div>
            <div>
              <img
                className='box'
                ref={img => (this.box15 = img)}
                src={G}
              />
              <img
                className='box'
                ref={img => (this.box16 = img)}
                src={A}
              />
              <img
                className='box'
                ref={img => (this.box17 = img)}
                src={B}
              />
              <img
                className='box'
                ref={img => (this.box18 = img)}
                src={R}
              />
              <img
                className='box'
                ref={img => (this.box19 = img)}
                src={I}
              />
              <img
                className='box'
                ref={img => (this.box20 = img)}
                src={E}
              />
              <img
                className='box'
                ref={img => (this.box21 = img)}
                src={L}
              />
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default Rotate


// this.mouseDownHandler = this.mouseDownHandler.bind(this)
// this.mouseUpHandler = this.mouseUpHandler.bind(this)
// this.deslectAll = this.deslectAll.bind(this)

// to avoid unwanted behaviour, deselect all text
// deslectAll() {
//   if (document.selection) {
//     document.selection.empty();
//   } else if (window.getSelection) {
//     window.getSelection().removeAllRanges();
//   }
// }

// mouseDownHandler(e) {
//   e.stopPropagation()
//   const fromBoxCenter = this.getPositionFromCenter(e)
//   const newStartAngle =
//     90 - Math.atan2(fromBoxCenter.y, fromBoxCenter.x) * (180 / Math.PI)
//   this.setState({
//     startAngle: newStartAngle,
//     isActive: true
//   })
// }

// mouseUpHandler(e) {
//   this.deslectAll()
//   e.stopPropagation()
//   const { isActive, angle, startAngle, currentAngle } = this.state
//   if (isActive) {
//     const newCurrentAngle = currentAngle + (angle - startAngle)
//     this.setState({
//       isActive: false,
//       currentAngle: newCurrentAngle
//     })
//   }
// }