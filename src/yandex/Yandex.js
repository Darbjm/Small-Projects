import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import 'bulma'
import twilio from './images/twilio-2.svg'
import yandex from './images/yandex-2.svg'

class Yandex extends Component {
  state = {
    data: {
      text: '',
      Languages: []
    },
    isActive: false,
    langSelected: '',
    langCode: '',
    success: false,
    translate: []
  }

  async componentDidMount() {
    const Yandex = process.env.REACT_APP_YANDEX_KEY
    console.log(process.env)
    try {
      const langs = await axios.get(`https://translate.yandex.net/api/v1.5/tr.json/getLangs?key=${Yandex}&ui=en`)
      this.setState({ data: { Languages: langs.data.langs } })
    } catch (err) {
      console.log(err)
    }
  }

  handleChange = ({ target: { name, value } }) => {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data, error: '' })
    this.setState({ 
      success: false,
      translate: [] 
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    this.translate(this.state.langCode, this.state.data.text)
      .then(() => this.sendMessage())
      .catch(err => this.error(err))
  }

  translate = async (lang, text) => {
    const Yandex = process.env.REACT_APP_YANDEX_KEY
    await axios.post('https://translate.yandex.net/api/v1.5/tr.json/translate', null, {
      params: { key: Yandex, lang, text }
    })
      .then(trans => this.setState({ translate: trans }))
  }

  sendMessage = async () => {
    this.setState({ success: true })
    const language = this.state.langSelected
    const message = {
      ...this.state.translate,
      language
    }
    try {
      await axios.post('/api/message', message)
    } catch (err) {
      console.log(err)
    }
  }

  selectLang = (lang) => {
    this.setState({ langSelected: lang })
    const object = this.state.data.Languages
    this.getKeyByValue(object, lang)
  }

  getKeyByValue = (object, value) => {
    const langCode = Object.keys(object).find(key => object[key] === value)
    this.setState({ langCode })
  }

  select = (e) => {
    e.preventDefault()
    this.setState({ isActive: !this.state.isActive })
    this.setState({ 
      success: false
    })
  }

  render() {
    const { data, isActive, langSelected, success, translate } = this.state
    const list = Object.values(data.Languages)
    return (
      <main>
        <section>
          <div className='form'>
            <h1>Using<img src={yandex} alt='yandex' />and  <img src={twilio} alt='Twilio' />  send me a message in any language below</h1>
            <hr/>
            <form onSubmit={this.handleSubmit} className='column has-text-centered'>
              <input
                className='input is-rounded is-large'
                name='text'
                placeholder='Text'
                onChange={this.handleChange}
              />
              <br/>
              <br/>
              <div onClick={this.select} className={'dropdown ' + (isActive ? 'is-active' : '')}>
                <div className="dropdown-trigger">
                  <button className="button is-rounded is-large" aria-haspopup="true" aria-controls="dropdown-menu">
                    <span>{langSelected ? langSelected : 'Select a Language'}</span>
                  </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                  <div className="dropdown-content" style={{ 'maxHeight': '300px', 'overflow': 'auto' }}>
                    {data.Languages && list.map((lang, i) => <a key={i} onClick={() => this.selectLang(lang)} className="dropdown-item">{lang}</a>)}
                  </div>
                </div>
              </div>
              <br/>
              <hr/>
              {success && <h1>Message sent in {langSelected}</h1>}
              {success && <br/>}
              {translate.data && <h1>{'Translated ' + '`' + data.text + '`' + ' from English to ' + '`' + translate.data.text[0] + '`' + ` in ${langSelected}`}</h1>}
              {translate.data && <hr />}
              <button type='submit' className='button is-rounded is-large is-danger'>Send</button>
            </form>
            <button onClick={() => this.translate(this.state.langCode, this.state.data.text)} className='button is-rounded is-large is-primary'>Translate</button>
          </div>
        </section>
        <div className='next'><Link className='button is-rounded' to='/d3'> Next</Link></div>
      </main>
    )
  }
}

export default Yandex