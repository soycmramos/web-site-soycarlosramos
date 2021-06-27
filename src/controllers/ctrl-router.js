const nodemailer = require('nodemailer')

// routes
exports.render_index = (req, res) => {
	const skills = require('../data/skills.json')
	res.render('index', { skills })
	return
}

exports.render_contact = (req, res) => {
	const alert = req.flash('alert')[0] || null
	res.render('contact', { alert })
	return
}

// Error 404 - Not found
exports.render_404 = (req, res) => res.render('404')

// contact form
exports.handleContactForm = (req, res, next) => {
	let { name, email, message } = req.body
	name = name.trim()
	email = email.trim()
	message = message.trim()

	if (!name || !email || !message) {
		req.flash('alert', {
			type: "danger",
			text: 'Debes completar todos los campos.'
		})

		res.redirect('/contacto')
		return
	}
}





exports.sendMail = async (req, res) => {
	const { name, email, message } = req.body
	let transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 587,
		secure: false,
		auth: {
			user: 'carlosmarioramos34@gmail.com',
			pass: '@Cr43188',
		}
	})

	try {
		let info = await transporter.sendMail({
			from: `${name} <${email}>`,
			to: "carlosmarioramos34@gmail.com",
			subject: `¡${name} te ha contactado desde tu blog! <${email}>`,
			text: message
		})
		console.log("Message sent: %s", info.messageId)
	} catch (error) {
		console.log(error)
		res.redirect('/')
		return
	}

	res.redirect('/')
	return 
}