const { Router } = require('express')
const router = Router()
const ctrlRouter = require('../controllers/ctrl-router')

router.get('/', ctrlRouter.render_index)
router.get('/contacto', ctrlRouter.render_contact)
router.get('/email-success', ctrlRouter.render_emailSuccess)
router.get('/cv', ctrlRouter.render_cv)


router.post('/contact', ctrlRouter.handleContactForm, ctrlRouter.sendMail)

// Error 404 - Page not found
router.get('*', ctrlRouter.render_404)

module.exports = router