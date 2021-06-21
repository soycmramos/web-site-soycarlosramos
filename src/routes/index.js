const { Router } = require('express')
const router = Router()
const ctrlRouter = require('../controllers/ctrl-router')

router.get('/', ctrlRouter.render_index)

module.exports = router