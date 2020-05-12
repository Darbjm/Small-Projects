const twilio = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN)

function message(req, res) {
  const eng = req.body.config.params.text
  const trans = req.body.data.text[0]
  const lang = req.body.language
  const sentance = `${eng + ' is ' + trans + ' in ' + lang}`
  try {
    twilio.messages.create({
      from: process.env.TWILIO_NUMBER,
      to: process.env.MY_NUMBER,
      body: sentance
    })
  } catch (err) {
    res.json(err)
  }
}

module.exports = { message }
