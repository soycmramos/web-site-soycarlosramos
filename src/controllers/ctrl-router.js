const nodemailer = require('nodemailer')
const path = require('path')

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

exports.render_emailSuccess = (req, res) => {
	res.render('email-success')
}

exports.render_cv = (req, res) => {
	res.setHeader("Content-Type", "Application/pdf")
	res.sendFile(path.resolve(__dirname, '../data/cv-carlos-ramos.pdf'))
	return
}

// Error 404 - Page not found
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

	next()
}

//Send email
exports.sendMail = async (req, res) => {
	const { name, email, message } = req.body
	let transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 587,
		secure: false,
		auth: {
			type: 'OAuth2',
			user: 'carlosmarioramos34@gmail.com',
			clientId: process.env.CLIENT_ID,
			clientSecret: process.env.CLIENT_SECRET,
			refreshToken: process.env.REFRESH_TOKEN,
			accessToken: process.env.ACCESS_TOKEN
		}
	})

	try {
		await transporter.sendMail({
			from: `${name} <${email}>`,
			to: "carlosmarioramos34@gmail.com",
			subject: `¡${name} te ha contactado desde tu blog! <${email}>`,
			text: message
		})

		res.redirect('/email-success')
		return
	} catch (error) {
		console.log(error)
		res.redirect('/')
		return
	}
}