const { Router } = require('express')
const router = Router()
const ctrlRouter = require('../controllers/ctrl-router')

router.get('/', ctrlRouter.render_index)
router.get('/contacto', ctrlRouter.render_contact)

module.exports = router