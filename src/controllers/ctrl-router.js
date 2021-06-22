exports.render_index = (req, res) => {
  const skills = require('../data/skills.json')
  res.render('index', { skills })
  return
}

exports.render_contact = (req, res) => {
  res.render('contact')
  return
}