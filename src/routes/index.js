const { Router } = require('express')
const router = Router()
const ctrlRouter = require('../controllers/ctrl-router')

router.get('/', ctrlRouter.render_index)
router.get('/contacto', ctrlRouter.render_contact)

router.post('/contact', ctrlRouter.handleContactForm, ctrlRouter.sendMail)

// Error 404 - Not found
router.get('*', ctrlRouter.render_404)

module.exports = router