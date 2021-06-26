exports.render_index = (req, res) => {
  const skills = require('../data/skills.json')
  res.render('index', { skills })
  return
}

exports.render_contact = (req, res) => {
  res.render('contact')
  return
}

// Error 404 - Not found
exports.render_404 = (req, res) => res.render('404')